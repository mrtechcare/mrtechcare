// Cloudflare Pages Function: GET /api/auth/me

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
      return new Response(JSON.stringify({ authenticated: false, user: null }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const now = Date.now();

    // Check Cloudflare D1
    if (env && env.DB) {
      try {
        const session = await env.DB.prepare(
          "SELECT * FROM sessions WHERE session_token = ? AND expires_at > ?"
        ).bind(sessionToken, now).first();

        if (session) {
          const user = await env.DB.prepare(
            "SELECT phone, name, email, role FROM users WHERE phone = ?"
          ).bind(session.user_phone).first();

          return new Response(JSON.stringify({
            authenticated: true,
            user: user || { phone: session.user_phone, role: "customer" }
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }
      } catch (err) {
        console.warn("D1 session check error:", err);
      }
    }

    return new Response(JSON.stringify({ authenticated: false, user: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ authenticated: false, error: "Session verification error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
