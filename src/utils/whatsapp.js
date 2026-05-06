export function sanitizeWhatsAppPhone(phone) {
  return (phone || '').replace(/\D/g, '')
}

export function getWhatsAppUrl(phone, message) {
  const sanitizedPhone = sanitizeWhatsAppPhone(phone)
  const encodedMessage = encodeURIComponent(message || '')
  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`
}

export function buildWhatsAppLeadMessage(form) {
  return [
    'Hi Yogi Stunt School, I am interested in stunt training.',
    '',
    `Name: ${form.name || '-'}`,
    `Email: ${form.email || '-'}`,
    `Phone: ${form.phone || '-'}`,
    `Program: ${form.program || 'General Enquiry'}`,
    `Message: ${form.message || '-'}`,
  ].join('\n')
}
