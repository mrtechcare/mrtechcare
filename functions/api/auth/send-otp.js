// Cloudflare Pages Function: POST /api/auth/send-otp
// High-Security OTP Dispatcher

export async function onRequestPost({ request, env }) {
  try {
    // 1. Strict Database Availability Check
    if (!env || !env.DB) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Authentication service database is temporarily unavailable. Please contact Team MrTech Care on WhatsApp (+91 99909 46044) for assistance." 
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Strict SMS Gateway Credential Check
    if (!env.SMS_PROVIDER_API_KEY) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "SMS gateway service is currently unconfigured. Please contact Team MrTech Care on WhatsApp (+91 99909 46044) for immediate service verification." 
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json().catch(() => ({}));
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');

    // 3. Validate 10-digit Indian Mobile Number
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

    // 4. Rate-Limiting: Max 3 requests per 15 minutes per phone number
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
    } catch (dbRateErr) {
      console.error("D1 rate limit query failed:", dbRateErr.message || "DB query error");
      return new Response(JSON.stringify({
        success: false,
        error: "Database verification error. Please try again shortly."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 5. Generate Cryptographically Secure 6-digit numeric OTP
    const rawBytes = new Uint8Array(4);
    crypto.getRandomValues(rawBytes);
    const randomNum = (rawBytes[0] << 24 | rawBytes[1] << 16 | rawBytes[2] << 8 | rawBytes[3]) >>> 0;
    const otpCode = (100000 + (randomNum % 900000)).toString();

    const expiresAt = now + 5 * 60 * 1000; // 5-minute expiry
    const otpId = `otp_${now}_${Math.random().toString(36).substring(2, 9)}`;

    // 6. Record in Cloudflare D1
    try {
      await env.DB.prepare(
        "INSERT INTO otp_verifications (id, phone, otp_code, expires_at, attempts, verified) VALUES (?, ?, ?, ?, 0, 0)"
      ).bind(otpId, formattedPhone, otpCode, expiresAt).run();
    } catch (dbInsertErr) {
      console.error("D1 OTP insert failed:", dbInsertErr.message || "DB insert error");
      return new Response(JSON.stringify({
        success: false,
        error: "Failed to initialize verification record. Please try again."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 7. Dispatch SMS via SMS Gateway
    let smsDispatched = false;
    try {
      const smsRes = await fetch("https://www.fast2sms.com/dev/bulkV2", {
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

      const smsData = await smsRes.json().catch(() => ({}));
      if (smsRes.ok && smsData.return) {
        smsDispatched = true;
      }
    } catch (smsErr) {
      // Security: Never log the OTP in logs!
      console.error("SMS gateway dispatch failed:", smsErr.message || "Network error");
    }

    // 8. Failsafe if SMS delivery fails
    if (!smsDispatched) {
      return new Response(JSON.stringify({
        success: false,
        error: "Failed to deliver SMS verification code. Please verify your mobile connectivity or contact Team MrTech Care on WhatsApp (+91 99909 46044)."
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 9. Return safe response (ZERO OTP leakage)
    return new Response(JSON.stringify({
      success: true,
      message: `Verification code dispatched to ${formattedPhone}. Valid for 5 minutes.`,
      expiresInSeconds: 300
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: "Internal server error dispatching verification code." 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
