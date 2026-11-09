export const WHATSAPP_PHONE = '919990946044';
export const DISPLAY_PHONE = '+91 99909 46044';
export const BUSINESS_EMAIL = 'rajamister710@gmail.com';
export const FOUNDER_NAME = 'Raja Kumar';
export const TEAM_NAME = 'Team MrTech Care';
export const BUSINESS_NAME = 'MrTech Care';
export const TAGLINE = 'Your Tech. Our Care.';

/**
 * Official Google Business profile review portal link.
 * Defaults to the verified shortlink: https://share.google/GWaxGBHSpVdhsN36J
 * Can also be overridden via environment variable VITE_GOOGLE_BUSINESS_REVIEW_URL.
 */
export const GOOGLE_BUSINESS_REVIEW_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GOOGLE_BUSINESS_REVIEW_URL) 
    || 'https://share.google/GWaxGBHSpVdhsN36J';


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
    ? `नमस्ते Team MrTech Care,\n\nमुझे निम्नलिखित सेवा के बारे में जानकारी / बुकिंग चाहिए:\n📌 सेवा: *${serviceName}*\n\nकृपया मुझे उपलब्धता और प्रक्रिया बताएं। धन्यवाद!`
    : `Hello Team MrTech Care,\n\nI would like to inquire about / book the following service:\n📌 Service: *${serviceName}*\n\nPlease let me know your availability and next steps. Thank you!`;

  return createWhatsAppLink(message);
};

/**
 * Creates an inquiry message from the interactive contact form.
 */
export const getFormEnquiryLink = ({ name, device, service, serviceMode, location, problem }) => {
  const message = `Hello Team MrTech Care,\n\nI have a service enquiry:\n` +
    `👤 *Name:* ${name || 'Customer'}\n` +
    `💻 *Device:* ${device}\n` +
    `🛠️ *Service Required:* ${service}\n` +
    `📍 *Mode of Service:* ${serviceMode}\n` +
    `🗺️ *Location / Area:* ${location}\n` +
    `📝 *Problem Description:* ${problem}\n\n` +
    `Looking forward to your guidance.`;

  return createWhatsAppLink(message);
};
