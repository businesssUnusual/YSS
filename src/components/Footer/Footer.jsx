import React from 'react'
import { siteContent } from '../../content/siteContent'
import './Footer.css'

const { footer, nav } = siteContent

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="gold-divider" />
      <div className="container footer__inner">
        <div className="footer__brand">
          {nav.logo ? (
            <img src={nav.logo} alt={nav.brandFull} className="footer__logo-img" />
          ) : (
            <span className="footer__logo">{nav.brand}</span>
          )}
          <p className="footer__tagline">{footer.tagline}</p>
          <div className="footer__social">
            {footer.social.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Quick Links</h4>
          <ul>
            {footer.quickLinks.map(link => (
              <li key={link}>
                <button className="footer__nav-link" onClick={() => {
                  if (link === 'Privacy Policy') {
                    window.open('/YSS/privacy', '_blank')
                    return
                  }
                  if (link === 'Terms and Condition') {
                    window.open('/YSS/termandcondition', '_blank')
                    return
                  }
                  const el = document.getElementById(link.toLowerCase())
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__programs">
          <h4 className="footer__nav-title">Programs</h4>
          <ul>
            {siteContent.programs.items.map(p => (
              <li key={p.id}>
                <span className="footer__nav-link footer__nav-link--text">{p.icon} {p.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__nav-title">Contact</h4>
          {siteContent.contact.info.map((item, i) => (
            <p key={i} className="footer__contact-item">
              <span>{item.icon}</span> {item.value}
            </p>
          ))}
          <div className="footer__business">
            <h4 className="footer__nav-title">Business Details</h4>
            {footer.businessDetails.map(item => (
              <p key={item.label} className="footer__business-item">
                <span className="footer__business-label">{item.label}</span> {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">{footer.copyright}</p>
          <div className="footer__legal">
            {footer.links.map(l => {
              if (l === 'Privacy Policy') {
                return <button key={l} className="footer__legal-link" onClick={() => window.open('/YSS/privacy', '_blank')}>{l}</button>
              }
              if (l === 'Terms and Condition') {
                return <button key={l} className="footer__legal-link" onClick={() => window.open('/YSS/termandcondition', '_blank')}>{l}</button>
              }
              return <a key={l} href="#" className="footer__legal-link">{l}</a>
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
