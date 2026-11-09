// Cloudflare Pages Function: /api/reviews

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

// GET: Fetch verified and approved public reviews
export async function onRequestGet({ env }) {
  try {
    if (env && env.DB) {
      const result = await env.DB.prepare(
        "SELECT id, customer_name, rating, service_category, comment, is_verified_customer, created_at FROM customer_reviews WHERE is_approved = 1 ORDER BY created_at DESC"
      ).all();

      return new Response(JSON.stringify({
        success: true,
        reviews: result.results || []
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      reviews: []
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: "Failed to load reviews." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

// POST: Submit a new customer review (Saved as is_approved = 0 for validation)
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json().catch(() => ({}));
    const name = (body.customer_name || '').trim();
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    const rating = parseInt(body.rating, 10);
    const serviceCategory = (body.service_category || 'Computer Hardware & Repair').trim();
    const comment = (body.comment || '').trim();

    if (!name || name.length < 2) {
      return new Response(JSON.stringify({ success: false, error: "Please enter your name." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return new Response(JSON.stringify({ success: false, error: "Please provide a valid 10-digit mobile number for service verification." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return new Response(JSON.stringify({ success: false, error: "Rating must be between 1 and 5 stars." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!comment || comment.length < 10) {
      return new Response(JSON.stringify({ success: false, error: "Please write at least 10 characters describing your experience." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const formattedPhone = `+91${phone}`;
    const reviewId = `rev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const cookies = parseCookies(request.headers.get("Cookie"));
    const sessionToken = cookies["mtc_session"];
    let isVerifiedCustomer = 0;

    if (env && env.DB) {
      try {
        // Check if phone has completed service orders or valid session
        const orderCheck = await env.DB.prepare(
          "SELECT COUNT(*) as count FROM service_orders WHERE user_phone = ?"
        ).bind(formattedPhone).first();

        if (orderCheck && orderCheck.count > 0) {
          isVerifiedCustomer = 1;
        }

        // Insert review with is_approved = 0 (Requires verification before public release)
        await env.DB.prepare(
          "INSERT INTO customer_reviews (id, user_phone, customer_name, rating, service_category, comment, is_verified_customer, is_approved) VALUES (?, ?, ?, ?, ?, ?, ?, 0)"
        ).bind(reviewId, formattedPhone, name, rating, serviceCategory, comment, isVerifiedCustomer).run();

      } catch (insertErr) {
        console.warn("D1 review insert error:", insertErr);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Thank you for sharing your experience! Your review has been recorded and will be published upon routine verification."
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to submit review." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
