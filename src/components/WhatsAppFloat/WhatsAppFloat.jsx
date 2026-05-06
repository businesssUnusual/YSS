import React from 'react'
import { siteContent } from '../../content/siteContent'
import { getWhatsAppUrl } from '../../utils/whatsapp'
import './WhatsAppFloat.css'

const { whatsapp } = siteContent

export default function WhatsAppFloat() {
  const openWhatsApp = () => {
    const url = getWhatsAppUrl(whatsapp.phone, whatsapp.welcomeMessage)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button className="wa-float" onClick={openWhatsApp} aria-label="Chat on WhatsApp">
      <span className="wa-float__icon">💬</span>
      <span className="wa-float__text">{whatsapp.floatingButtonText}</span>
    </button>
  )
}
