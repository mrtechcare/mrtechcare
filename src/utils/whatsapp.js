export const WHATSAPP_PHONE = '919990946044';
export const DISPLAY_PHONE = '+91 99909 46044';
export const BUSINESS_EMAIL = 'rajamister710@gmail.com';
export const OWNER_NAME = 'Raja Kumar';
export const BUSINESS_NAME = 'MrTech Care';
export const TAGLINE = 'Your Tech. Our Care.';

/**
 * Generates a direct WhatsApp link with a formatted and encoded text payload.
 * @param {string} message 
 * @returns {string} WhatsApp URL
 */
export const createWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
};

/**
 * Creates an inquiry message for a specific service.
 * @param {string} serviceName 
 * @param {string} lang 
 * @returns {string} WhatsApp URL
 */
export const getServiceBookingLink = (serviceName, lang = 'en') => {
  const message = lang === 'hi'
    ? `नमस्ते राजा जी (MrTech Care),\n\nमुझे निम्नलिखित सेवा के बारे में जानकारी / बुकिंग चाहिए:\n📌 सेवा: *${serviceName}*\n\nकृपया मुझे उपलब्धता और प्रक्रिया बताएं। धन्यवाद!`
    : `Hello Raja ji (MrTech Care),\n\nI would like to inquire about / book the following service:\n📌 Service: *${serviceName}*\n\nPlease let me know your availability and next steps. Thank you!`;

  return createWhatsAppLink(message);
};

/**
 * Creates an inquiry message from the interactive contact form.
 */
export const getFormEnquiryLink = ({ name, device, service, serviceMode, location, problem }) => {
  const message = `Hello MrTech Care,\n\nI have a service enquiry from mrtechcare.in:\n` +
    `👤 *Name:* ${name || 'Customer'}\n` +
    `💻 *Device:* ${device}\n` +
    `🛠️ *Service Required:* ${service}\n` +
    `📍 *Mode of Service:* ${serviceMode}\n` +
    `🗺️ *Location / Area:* ${location}\n` +
    `📝 *Problem Description:* ${problem}\n\n` +
    `Looking forward to your diagnostic guidance.`;

  return createWhatsAppLink(message);
};
