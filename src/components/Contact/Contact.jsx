import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { buildWhatsAppLeadMessage, getWhatsAppUrl } from '../../utils/whatsapp'
import './Contact.css'

const { contact } = siteContent
const { formLabels } = contact
const contactPhone = contact.info.find(item => item.label === 'Phone')?.value || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '', consent: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const leadMessage = buildWhatsAppLeadMessage(form)
    const whatsappUrl = getWhatsAppUrl(contactPhone, leadMessage)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', program: '', message: '', consent: false })
  }

  return (
    <section id="contact" className="contact">
      <hr className="gold-divider" />
      <div className="container contact__inner">

        {/* INFO */}
        <div className="contact__info">
          <span className="section-tag">{contact.sectionTag}</span>
          <h2 className="section-headline">{contact.headline}</h2>
          <p className="contact__sub">{contact.subheadline}</p>

          <div className="contact__details">
            {contact.info.map((item, i) => (
              item.url ? (
                <a
                  className="contact__detail contact__detail--link"
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div>
                    <p className="contact__detail-label">{item.label}</p>
                    <p className="contact__detail-value contact__detail-link">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="contact__detail" key={i}>
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div>
                    <p className="contact__detail-label">{item.label}</p>
                    <p className="contact__detail-value">{item.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>Opening WhatsApp...</h3>
              <p>Your enquiry details are prefilled. Please send the message in WhatsApp to continue.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{formLabels.name}</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Wick" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{formLabels.email}</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{formLabels.phone}</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label htmlFor="program">{formLabels.program}</label>
                  <select id="program" name="program" value={form.program} onChange={handleChange}>
                    <option value="">Select a program</option>
                    <option>1-Month Master</option>
                    <option>2-Month Pro Rider</option>
                    <option>3-Month Elite</option>
                    <option>Bike + Petrol + Maintenance Add-on</option>
                    <option>Stay + Food Add-on</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{formLabels.message}</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your experience and goals..." />
              </div>

              <label className="contact__checkbox" htmlFor="consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                />
                <span>{formLabels.consent}</span>
              </label>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                {formLabels.submit} →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
