// Cloudflare Pages Function: POST /api/quotations
// Enterprise Quotation & RFP Registration with Cryptographic Uniqueness

function generateQuoteReference(year, quoteType) {
  const typeTag = quoteType === 'corporate' ? 'CORP' : 'INDV';
  const rawBytes = new Uint8Array(4);
  crypto.getRandomValues(rawBytes);
  const entropy = Array.from(rawBytes).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  const timeCode = Date.now().toString(36).slice(-4).toUpperCase();
  return `MTC-${year}-${typeTag}-${timeCode}-${entropy}`;
}

export async function onRequestPost({ request, env }) {
  try {
    // 1. Strict Database Availability Check
    if (!env || !env.DB) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Quotation registry database is temporarily unavailable. Please request your custom quotation directly via WhatsApp (+91 99909 46044)." 
      }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json().catch(() => ({}));
    const quoteType = body.quote_type === 'corporate' ? 'corporate' : 'individual';
    const contactPerson = (body.contact_person || '').trim();
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    const email = (body.email || '').trim().toLowerCase();
    const servicesRequired = (body.services_required || '').trim();
    const projectDetails = (body.project_details || '').trim();

    // 2. Validate Contact Details
    if (!contactPerson || contactPerson.length < 2) {
      return new Response(JSON.stringify({ success: false, error: "Please provide a valid contact name." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return new Response(JSON.stringify({ success: false, error: "Please enter a valid 10-digit mobile number." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ success: false, error: "Please provide a valid email address for quotation dispatch." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Corporate RFP specific validation
    const companyName = (body.company_name || '').trim();
    const gstNumber = (body.gst_number || '').trim().toUpperCase();
    const workstationCount = parseInt(body.workstation_count, 10) || 0;
    const fleetScope = (body.fleet_scope || '').trim();
    const preferredSla = (body.preferred_sla || 'Standard Scheduled SLA').trim();

    if (quoteType === 'corporate' && (!companyName || companyName.length < 2)) {
      return new Response(JSON.stringify({ success: false, error: "Please provide your registered Company / Organization name." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const year = new Date().getFullYear();
    const formattedPhone = `+91${phone}`;

    // 4. Collision-Proof Reference Generation & Database Insertion
    let quoteNumber = '';
    let quoteId = '';
    let inserted = false;
    let insertAttempts = 0;

    while (!inserted && insertAttempts < 5) {
      insertAttempts++;
      quoteNumber = generateQuoteReference(year, quoteType);
      quoteId = `quote_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      try {
        await env.DB.prepare(
          `INSERT INTO quotations (
            id, quote_number, quote_type, contact_person, phone, email, 
            company_name, gst_number, workstation_count, fleet_scope, 
            services_required, preferred_sla, project_details, status
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'received')`
        ).bind(
          quoteId, quoteNumber, quoteType, contactPerson, formattedPhone, email,
          companyName || null, gstNumber || null, workstationCount, fleetScope || null,
          servicesRequired || 'Standard Scope', preferredSla, projectDetails
        ).run();
        inserted = true;
      } catch (d1Err) {
        if (d1Err.message && d1Err.message.toLowerCase().includes('unique')) {
          // Collision detected: retry loop generates new cryptographic entropy
          continue;
        }
        console.error("D1 quotation insert failed:", d1Err.message);
        throw d1Err;
      }
    }

    if (!inserted) {
      return new Response(JSON.stringify({
        success: false,
        error: "Quotation registry collision. Please try again or reach out directly on WhatsApp."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      quoteNumber,
      message: `Your ${quoteType === 'corporate' ? 'corporate RFP / custom quotation' : 'service quotation request'} has been recorded under reference ${quoteNumber}. Team MrTech Care will review the specifications and reply to ${email} and WhatsApp.`
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to submit quotation request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
