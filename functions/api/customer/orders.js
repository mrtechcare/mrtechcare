// Cloudflare Pages Function: GET /api/customer/orders (Strict Authorization)

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

export async function onRequestGet({ request, env }) {
  try {
    const cookies = parseCookies(request.headers.get("Cookie"));
    const sessionToken = cookies["mtc_session"];

    if (!sessionToken) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Unauthorized: Please log in with your mobile OTP to view your service history." 
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const now = Date.now();

    if (!env || !env.DB) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Database service temporarily unavailable. Please try again shortly." 
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      const session = await env.DB.prepare(
        "SELECT user_phone FROM sessions WHERE session_token = ? AND expires_at > ?"
      ).bind(sessionToken, now).first();

      if (!session) {
        return new Response(JSON.stringify({ 
          success: false, 
          error: "Session expired or invalid. Please log in again." 
        }), {
          status: 401,
          headers: { "Content-Type": "application/json" }
        });
      }

      const verifiedPhone = session.user_phone;

      // Strict authorization: Only query orders belonging to verified user's phone
      const orders = await env.DB.prepare(
        "SELECT * FROM service_orders WHERE user_phone = ? ORDER BY booking_date DESC"
      ).bind(verifiedPhone).all();

      return new Response(JSON.stringify({
        success: true,
        phone: verifiedPhone,
        orders: orders.results || []
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });

    } catch (d1Err) {
      console.error("D1 orders error:", d1Err.message);
      return new Response(JSON.stringify({ success: false, error: "Failed to load service records from database." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to load service history." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
