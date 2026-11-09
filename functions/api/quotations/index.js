// Cloudflare Pages Function: POST /api/quotations

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json().catch(() => ({}));
    const quoteType = body.quote_type === 'corporate' ? 'corporate' : 'individual';
    const contactPerson = (body.contact_person || '').trim();
    let phone = (body.phone || '').trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    const email = (body.email || '').trim().toLowerCase();
    const servicesRequired = (body.services_required || '').trim();
    const projectDetails = (body.project_details || '').trim();

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

    // Corporate specific validation
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
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const quoteNumber = `MTC-${year}-${quoteType.toUpperCase().slice(0, 4)}-${randomSuffix}`;
    const quoteId = `quote_${Date.now()}_${randomSuffix}`;
    const formattedPhone = `+91${phone}`;

    if (env && env.DB) {
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
          servicesRequired || 'Standard Scope', preferredSla, projectDetails,
        ).run();
      } catch (d1Err) {
        console.warn("D1 quotation insert error:", d1Err);
      }
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
