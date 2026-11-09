// Local Vite Dev Server Middleware for /api endpoints
// Simulates Cloudflare Pages Functions locally with full HTTP-only Cookie handling

const memoryOtpStore = new Map();
const memorySessions = new Map();
const memoryReviews = []; // Zero fake reviews or mock testimonials
const memoryQuotes = [];
const memoryOrders = new Map(); // phone -> orders array

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      cookies[parts[0].trim()] = parts.slice(1).join('=').trim();
    }
  });
  return cookies;
}

export function devApiPlugin() {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, `http://${req.headers.host}`);
        const path = url.pathname;
        const method = req.method;

        // Helper to read JSON body
        const readBody = () => new Promise((resolve) => {
          let data = '';
          req.on('data', chunk => { data += chunk; });
          req.on('end', () => {
            try {
              resolve(JSON.parse(data || '{}'));
            } catch {
              resolve({});
            }
          });
        });

        const sendJson = (statusCode, data, extraHeaders = {}) => {
          res.writeHead(statusCode, {
            'Content-Type': 'application/json',
            ...extraHeaders
          });
          res.end(JSON.stringify(data));
        };

        const cookies = parseCookies(req.headers.cookie);
        const sessionToken = cookies['mtc_session'];
        const activeSession = sessionToken ? memorySessions.get(sessionToken) : null;

        // 1. POST /api/auth/send-otp
        if (path === '/api/auth/send-otp' && method === 'POST') {
          const body = await readBody();
          let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');

          if (!/^[6-9]\d{9}$/.test(phone)) {
            return sendJson(400, { success: false, error: "Please enter a valid 10-digit Indian mobile number." });
          }

          const formattedPhone = `+91${phone}`;
          const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
          const expiresAt = Date.now() + 5 * 60 * 1000;

          memoryOtpStore.set(formattedPhone, { otp: otpCode, expiresAt, attempts: 0 });

          console.log(`\n========================================`);
          console.log(`[MrTech Care Dev OTP] Number: ${formattedPhone} -> OTP: ${otpCode}`);
          console.log(`========================================\n`);

          return sendJson(200, {
            success: true,
            message: `Verification code sent to ${formattedPhone}. Valid for 5 minutes.`,
            sandboxOtp: otpCode
          });
        }

        // 2. POST /api/auth/verify-otp
        if (path === '/api/auth/verify-otp' && method === 'POST') {
          const body = await readBody();
          let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
          const inputOtp = (body.otp || '').trim();

          const formattedPhone = `+91${phone}`;
          const record = memoryOtpStore.get(formattedPhone);

          // Allow universal test OTP 123456 or generated OTP
          const isValid = inputOtp === '123456' || (record && record.otp === inputOtp && Date.now() < record.expiresAt);

          if (!isValid) {
            return sendJson(400, { success: false, error: "Invalid or expired verification code." });
          }

          // Create session
          const sessionToken = 'sess_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
          memorySessions.set(sessionToken, {
            phone: formattedPhone,
            role: 'customer',
            createdAt: Date.now()
          });

          // Set HTTP-only Cookie
          const cookieHeader = `mtc_session=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}`;
          return sendJson(200, {
            success: true,
            message: "Authentication successful.",
            user: { phone: formattedPhone, role: 'customer' }
          }, { 'Set-Cookie': cookieHeader });
        }

        // 3. GET /api/auth/me
        if (path === '/api/auth/me' && method === 'GET') {
          if (activeSession) {
            return sendJson(200, {
              authenticated: true,
              user: { phone: activeSession.phone, role: activeSession.role }
            });
          }
          return sendJson(200, { authenticated: false, user: null });
        }

        // 4. POST /api/auth/logout
        if (path === '/api/auth/logout' && method === 'POST') {
          if (sessionToken) {
            memorySessions.delete(sessionToken);
          }
          const clearCookie = 'mtc_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
          return sendJson(200, { success: true, message: "Logged out." }, { 'Set-Cookie': clearCookie });
        }

        // 5. GET /api/customer/orders (Strict Authorization)
        if (path === '/api/customer/orders' && method === 'GET') {
          if (!activeSession) {
            return sendJson(401, { success: false, error: "Authentication required to view service history." });
          }

          const userOrders = memoryOrders.get(activeSession.phone) || [];
          return sendJson(200, {
            success: true,
            phone: activeSession.phone,
            orders: userOrders
          });
        }

        // 6. GET & POST /api/reviews
        if (path === '/api/reviews') {
          if (method === 'GET') {
            const approved = memoryReviews.filter(r => r.is_approved === 1);
            return sendJson(200, { success: true, reviews: approved });
          }

          if (method === 'POST') {
            const body = await readBody();
            const newRev = {
              id: 'rev_' + Date.now(),
              customer_name: body.customer_name || 'Customer',
              phone: body.phone,
              rating: parseInt(body.rating, 10) || 5,
              service_category: body.service_category || 'General Support',
              comment: body.comment || '',
              is_verified_customer: activeSession ? 1 : 0,
              is_approved: 0, // Pending validation as instructed
              created_at: new Date().toISOString()
            };
            memoryReviews.push(newRev);
            return sendJson(201, {
              success: true,
              message: "Thank you for your feedback! Your review has been recorded and will appear on the platform once routinely verified."
            });
          }
        }

        // 7. POST /api/quotations
        if (path === '/api/quotations' && method === 'POST') {
          const body = await readBody();
          const quoteType = body.quote_type === 'corporate' ? 'corporate' : 'individual';
          const year = new Date().getFullYear();
          const num = `MTC-${year}-${quoteType.toUpperCase().slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;

          const record = {
            id: 'quote_' + Date.now(),
            quote_number: num,
            quote_type: quoteType,
            ...body,
            created_at: new Date().toISOString()
          };
          memoryQuotes.push(record);

          return sendJson(201, {
            success: true,
            quoteNumber: num,
            message: `Quotation request registered successfully under reference ${num}. Team MrTech Care will contact you shortly.`
          });
        }

        next();
      });
    }
  };
}
