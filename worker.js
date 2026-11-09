// Cloudflare Worker Entrypoint for MrTech Care
// Integrates backend APIs with Cloudflare D1 and serves static frontend assets

import { onRequestPost as sendOtpHandler } from './functions/api/auth/send-otp.js';
import { onRequestPost as verifyOtpHandler } from './functions/api/auth/verify-otp.js';
import { onRequestGet as meHandler } from './functions/api/auth/me.js';
import { onRequestPost as logoutHandler } from './functions/api/auth/logout.js';
import { onRequestGet as ordersHandler } from './functions/api/customer/orders.js';
import { onRequestGet as getReviewsHandler, onRequestPost as postReviewHandler } from './functions/api/reviews/index.js';
import { onRequestPost as quotationsHandler } from './functions/api/quotations/index.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Handle CORS preflight options
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // 1. POST /api/auth/send-otp
    if (path === '/api/auth/send-otp' && method === 'POST') {
      return sendOtpHandler({ request, env, ctx });
    }

    // 2. POST /api/auth/verify-otp
    if (path === '/api/auth/verify-otp' && method === 'POST') {
      return verifyOtpHandler({ request, env, ctx });
    }

    // 3. GET /api/auth/me
    if (path === '/api/auth/me' && method === 'GET') {
      return meHandler({ request, env, ctx });
    }

    // 4. POST /api/auth/logout
    if (path === '/api/auth/logout' && method === 'POST') {
      return logoutHandler({ request, env, ctx });
    }

    // 5. GET /api/customer/orders
    if (path === '/api/customer/orders' && method === 'GET') {
      return ordersHandler({ request, env, ctx });
    }

    // 6. GET & POST /api/reviews
    if (path === '/api/reviews') {
      if (method === 'GET') {
        return getReviewsHandler({ request, env, ctx });
      }
      if (method === 'POST') {
        return postReviewHandler({ request, env, ctx });
      }
    }

    // 7. POST /api/quotations
    if (path === '/api/quotations' && method === 'POST') {
      return quotationsHandler({ request, env, ctx });
    }

    // Unknown API route safety
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ success: false, error: "Endpoint not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Serve Static Assets with Single Page Application (SPA) routing fallback
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
