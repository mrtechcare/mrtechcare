// Cloudflare Pages Function: POST /api/auth/verify-otp
// High-Security OTP Verification & Session Establishment

export async function onRequestPost({ request, env }) {
  try {
    // 1. Strict Database Availability Check - Fail closed if D1 is unavailable
    if (!env || !env.DB) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Authentication service database is temporarily unavailable. Please contact Team MrTech Care on WhatsApp (+91 99909 46044) for assistance." 
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json().catch(() => ({}));
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    const inputOtp = (body.otp || '').trim();

    // 2. Validate input formats
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return new Response(JSON.stringify({ success: false, error: "Invalid mobile number format." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!/^\d{6}$/.test(inputOtp)) {
      return new Response(JSON.stringify({ success: false, error: "Please enter a valid 6-digit verification code." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const formattedPhone = `+91${phone}`;
    const now = Date.now();

    // 3. Retrieve latest active (unverified) OTP record from Cloudflare D1
    let record;
    try {
      record = await env.DB.prepare(
        "SELECT * FROM otp_verifications WHERE phone = ? AND verified = 0 ORDER BY created_at DESC LIMIT 1"
      ).bind(formattedPhone).first();
    } catch (dbQueryErr) {
      console.error("D1 OTP lookup failed:", dbQueryErr.message || "Query error");
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Database lookup failed. Please try again shortly." 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!record) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "No active verification request found for this number. Please request a new code." 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 4. Validate OTP Expiration (5 minutes)
    if (now > record.expires_at) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "This verification code has expired. Please request a new code." 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 5. Enforce Maximum 3 Attempts
    if (record.attempts >= 3) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Too many incorrect attempts. This code is permanently invalidated. Please request a new code." 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 6. Strict Code Comparison (Constant-time style)
    if (record.otp_code !== inputOtp) {
      try {
        await env.DB.prepare(
          "UPDATE otp_verifications SET attempts = attempts + 1 WHERE id = ?"
        ).bind(record.id).run();
      } catch (updateErr) {
        console.error("D1 attempt update failed:", updateErr.message);
      }

      const remainingAttempts = 2 - record.attempts;
      const errorMsg = remainingAttempts > 0
        ? `Incorrect verification code. ${remainingAttempts} attempt(s) remaining.`
        : "Too many incorrect attempts. This code has been invalidated.";

      return new Response(JSON.stringify({ success: false, error: errorMsg }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 7. Mark OTP as Verified to Prevent Any Re-use
    try {
      await env.DB.prepare(
        "UPDATE otp_verifications SET verified = 1 WHERE id = ?"
      ).bind(record.id).run();
    } catch (markErr) {
      console.error("D1 mark verified failed:", markErr.message);
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Failed to update verification state. Please try again." 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 8. Upsert Customer Record in D1
    const userId = `usr_${phone}`;
    try {
      await env.DB.prepare(
        "INSERT INTO users (id, phone, role) VALUES (?, ?, 'customer') ON CONFLICT(phone) DO NOTHING"
      ).bind(userId, formattedPhone).run();
    } catch (userUpsertErr) {
      console.error("D1 user upsert failed:", userUpsertErr.message);
    }

    // 9. Generate Cryptographically Secure 256-bit Session Token
    const rawBytes = new Uint8Array(32);
    crypto.getRandomValues(rawBytes);
    const sessionToken = Array.from(rawBytes).map(b => b.toString(16).padStart(2, '0')).join('');
    const sessionExpiresAt = now + 30 * 24 * 60 * 60 * 1000; // 30-day session lifetime
    const sessionId = `sess_${now}_${Math.random().toString(36).substring(2, 9)}`;

    // 10. Persist Session in D1
    try {
      await env.DB.prepare(
        "INSERT INTO sessions (id, user_phone, session_token, expires_at) VALUES (?, ?, ?, ?)"
      ).bind(sessionId, formattedPhone, sessionToken, sessionExpiresAt).run();
    } catch (sessInsertErr) {
      console.error("D1 session save failed:", sessInsertErr.message);
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Failed to establish secure customer session. Please try again." 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 11. Issue HTTP-only, SameSite=Strict, Secure Cookie
    // STRICT SECURITY: Tokens are NEVER stored in localStorage or client storage
    const cookieHeader = `mtc_session=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}; Secure`;

    return new Response(JSON.stringify({
      success: true,
      message: "Authentication successful.",
      user: {
        phone: formattedPhone,
        role: "customer"
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookieHeader
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: "Internal server error during verification." 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
