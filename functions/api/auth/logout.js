// Cloudflare Pages Function: POST /api/auth/logout

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

export async function onRequestPost({ request, env }) {
  try {
    const cookies = parseCookies(request.headers.get("Cookie"));
    const sessionToken = cookies["mtc_session"];

    if (sessionToken && env && env.DB) {
      try {
        await env.DB.prepare("DELETE FROM sessions WHERE session_token = ?").bind(sessionToken).run();
      } catch (err) {
        console.warn("D1 delete session error:", err);
      }
    }

    // Clear HTTP-only cookie
    const clearCookie = "mtc_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure";

    return new Response(JSON.stringify({ success: true, message: "Logged out successfully." }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": clearCookie
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Logout failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
