/**
 * WhatsApp Deep-Link Builder Utility
 * 
 * Target Phone Number: +62 823 7417 3430
 * Produces structured direct links: https://wa.me/6282374173430?text=<encoded>
 */

export const WHATSAPP_NUMBER = '6282374173430';

/**
 * Builds a structured WhatsApp URL with tracking ref and bilingual support.
 * 
 * @param {Object} options
 * @param {Array} [options.items] - List of items [{ id, name, grade, qty }]
 * @param {string} [options.source='direct'] - Source identifier (e.g. 'hero', 'navbar', 'rfq-drawer')
 * @param {string} [options.lang='in'] - Language code ('in' or 'en')
 * @param {string} [options.destinationCity=''] - Destination city/region
 * @param {string} [options.company=''] - Company or business name
 * @param {string} [options.customMessage=''] - Optional custom message override
 * @returns {string} WhatsApp direct URL
 */
export function buildWaLink({
  items = [],
  source = 'direct',
  lang = 'in',
  destinationCity = '',
  company = '',
  customMessage = '',
} = {}) {
  const isEn = lang === 'en';
  let message = '';

  if (Array.isArray(items) && items.length > 0) {
    if (isEn) {
      const itemsList = items.map((item, idx) => {
        const name = item.name || `Commodity #${item.id || idx + 1}`;
        const parts = [];
        if (item.grade && item.grade.trim()) {
          parts.push(`Grade: ${item.grade.trim()}`);
        }
        if (item.qty && item.qty.trim()) {
          parts.push(`Volume: ${item.qty.trim()}`);
        }
        const extra = parts.length > 0 ? ` (${parts.join(', ')})` : '';
        return `${idx + 1}. ${name}${extra}`;
      }).join('\n');

      message = `Hello UD Fathan Cassia Jaya, I would like to request an official quotation for the following spice commodities:\n\n*Spice Inquiry List:*\n${itemsList}`;

      const meta = [];
      if (destinationCity && destinationCity.trim()) {
        meta.push(`• Destination City: ${destinationCity.trim()}`);
      }
      if (company && company.trim()) {
        meta.push(`• Company / Business: ${company.trim()}`);
      }

      if (meta.length > 0) {
        message += `\n\n*Procurement Details:*\n${meta.join('\n')}`;
      }

      message += `\n\nPlease confirm stock availability, harvest specifications, and your best commercial offer. Thank you.`;
    } else {
      const itemsList = items.map((item, idx) => {
        const name = item.name || `Komoditas #${item.id || idx + 1}`;
        const parts = [];
        if (item.grade && item.grade.trim()) {
          parts.push(`Grade: ${item.grade.trim()}`);
        }
        if (item.qty && item.qty.trim()) {
          parts.push(`Volume: ${item.qty.trim()}`);
        }
        const extra = parts.length > 0 ? ` (${parts.join(', ')})` : '';
        return `${idx + 1}. ${name}${extra}`;
      }).join('\n');

      message = `Halo UD Fathan Cassia Jaya, saya ingin meminta penawaran ketersediaan & harga untuk kebutuhan rempah berikut:\n\n*Daftar Kebutuhan Rempah:*\n${itemsList}`;

      const meta = [];
      if (destinationCity && destinationCity.trim()) {
        meta.push(`• Kota Tujuan: ${destinationCity.trim()}`);
      }
      if (company && company.trim()) {
        meta.push(`• Perusahaan / Usaha: ${company.trim()}`);
      }

      if (meta.length > 0) {
        message += `\n\n*Detail Pengiriman & Usaha:*\n${meta.join('\n')}`;
      }

      message += `\n\nMohon informasi stok terkini, spesifikasi komoditas, dan penawaran harga terbaiknya. Terima kasih.`;
    }
  } else if (customMessage && customMessage.trim()) {
    message = customMessage.trim();
  } else {
    message = isEn
      ? "Hello UD Fathan Cassia Jaya, I would like to inquire about spice availability and request a quotation for our business."
      : "Halo UD Fathan Cassia Jaya, saya ingin berkonsultasi dan meminta penawaran ketersediaan rempah untuk kebutuhan bisnis kami.";
  }

  // Append ref tag at the end if not already present
  if (source && !message.includes(`(ref: ${source})`)) {
    message += `\n\n(ref: ${source})`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
