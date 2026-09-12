import { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { buildWhatsAppLeadMessage, getWhatsAppUrl } from '../../utils/whatsapp'
import './Contact.css'

const { contact } = siteContent
const { formLabels } = contact
const contactPhone = contact.info.find(item => item.label === 'Phone')?.value || ''

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    addOns: [],
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const programOptions = ['1-Month Master', '2-Month Pro Rider', '3-Month Elite']
  const addOnOptions = ['Bike + Petrol + Maintenance', 'Stay + Food', 'Safety Gear']

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleAddOnChange = e => {
    const { value, checked } = e.target
    setForm(prev => {
      const nextAddOns = checked
        ? [...prev.addOns, value]
        : prev.addOns.filter(item => item !== value)

      return { ...prev, addOns: nextAddOns }
    })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.consent) errs.consent = 'Please accept to continue.'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    const leadMessage = buildWhatsAppLeadMessage(form)
    const whatsappUrl = getWhatsAppUrl(contactPhone, leadMessage)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', program: '', addOns: [], message: '', consent: false })
  }

  return (
    <section id="contact" className="contact">
      <hr className="gold-divider" />
      <div className="container contact__inner">

        {/* INFO */}
        <div className="contact__info">
          <span className="section-tag">{contact.sectionTag}</span>

          <div className="contact__brand-identity">
            <strong>Yogi Stunt School</strong>
            <span>A brand of Yogi Pvt. Ltd.</span>
          </div>

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
                    <span className="contact__map-hint">Open in Maps ↗</span>
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
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Wick" aria-describedby={errors.name ? 'err-name' : undefined} />
                  {errors.name && <span className="form-error" id="err-name" role="alert">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{formLabels.email}</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <span className="form-error" id="err-email" role="alert">{errors.email}</span>}
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
                    {programOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>{formLabels.addOn}</label>
                <div className="contact__addons">
                  {addOnOptions.map(option => (
                    <label className="contact__checkbox contact__checkbox--addon" key={option}>
                      <input
                        type="checkbox"
                        name="addOns"
                        value={option}
                        checked={form.addOns.includes(option)}
                        onChange={handleAddOnChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
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
                  aria-describedby={errors.consent ? 'err-consent' : undefined}
                />
                <span>{formLabels.consent}</span>
              </label>
              {errors.consent && <span className="form-error" id="err-consent" role="alert">{errors.consent}</span>}

              <button type="submit" className="btn btn-primary contact__submit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {formLabels.submit}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
