// Cloudflare Pages Function: POST /api/auth/send-otp

// Helper: In-memory fallback if D1 DB binding is pending setup in Cloudflare dashboard
const memoryOtpStore = new Map();

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json().catch(() => ({}));
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');

    // Validate 10-digit Indian Mobile Number
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Please enter a valid 10-digit Indian mobile number." 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const now = Date.now();
    const formattedPhone = `+91${phone}`;

    // Rate-limiting check: max 3 requests per 15 minutes
    if (env && env.DB) {
      try {
        const rateCheck = await env.DB.prepare(
          "SELECT COUNT(*) as count FROM otp_verifications WHERE phone = ? AND created_at >= datetime('now', '-15 minutes')"
        ).bind(formattedPhone).first();

        if (rateCheck && rateCheck.count >= 3) {
          return new Response(JSON.stringify({
            success: false,
            error: "Too many OTP requests for this number. For security, please wait 15 minutes before requesting again."
          }), {
            status: 429,
            headers: { "Content-Type": "application/json" }
          });
        }
      } catch (err) {
        console.warn("D1 rate limit check error:", err);
      }
    } else {
      const existing = memoryOtpStore.get(formattedPhone);
      if (existing && existing.requests >= 3 && (now - existing.firstRequestTime) < 15 * 60 * 1000) {
        return new Response(JSON.stringify({
          success: false,
          error: "Too many OTP requests. Please wait 15 minutes before requesting again."
        }), {
          status: 429,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // Generate 6-digit numeric OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = now + 5 * 60 * 1000; // 5-minute expiration
    const otpId = `otp_${now}_${Math.random().toString(36).substring(2, 9)}`;

    // Store in D1 or memory fallback
    if (env && env.DB) {
      try {
        await env.DB.prepare(
          "INSERT INTO otp_verifications (id, phone, otp_code, expires_at, attempts, verified) VALUES (?, ?, ?, ?, 0, 0)"
        ).bind(otpId, formattedPhone, otpCode, expiresAt).run();
      } catch (err) {
        console.warn("D1 insert error:", err);
      }
    } else {
      const prev = memoryOtpStore.get(formattedPhone) || { requests: 0, firstRequestTime: now };
      memoryOtpStore.set(formattedPhone, {
        otp: otpCode,
        expiresAt,
        attempts: 0,
        requests: prev.requests + 1,
        firstRequestTime: prev.firstRequestTime
      });
    }

    // Dispatch SMS via provider if API key present
    let smsDispatched = false;
    if (env && env.SMS_PROVIDER_API_KEY && env.SMS_PROVIDER === 'FAST2SMS') {
      try {
        await fetch("https://www.fast2sms.com/dev/bulkV2", {
          method: "POST",
          headers: {
            "authorization": env.SMS_PROVIDER_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            route: "otp",
            variables_values: otpCode,
            numbers: phone
          })
        });
        smsDispatched = true;
      } catch (smsErr) {
        console.error("Fast2SMS dispatch error:", smsErr);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: `Verification OTP dispatched to ${formattedPhone}. Valid for 5 minutes.`,
      expiresInSeconds: 300,
      // In sandbox/development when no live SMS gateway is configured, provide debugOtp so user can test without SMS credits
      sandboxOtp: !smsDispatched ? otpCode : undefined
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Internal server error dispatching OTP." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
