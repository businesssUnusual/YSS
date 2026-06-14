import React, { useState, useEffect } from 'react'
import { siteContent } from '../../content/siteContent'
import './Navbar.css'

const { nav } = siteContent

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (id === 'Privacy Policy') {
      window.open('/privacy', '_blank')
      setMenuOpen(false)
      return
    }
    if (id === 'Terms and Condition') {
      window.open('/termandcondition', '_blank')
      setMenuOpen(false)
      return
    }
    if (id === 'FAQ') {
      window.open('/faq', '_blank')
      setMenuOpen(false)
      return
    }
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <div className="navbar__brand" onClick={() => scrollTo('home')}>
          {nav.logo ? (
            <img src={nav.logo} alt={nav.brandFull} className="navbar__logo" />
          ) : (
            <>
              <span className="navbar__brand-initials">{nav.brand}</span>
              <span className="navbar__brand-full">{nav.brandFull}</span>
            </>
          )}
        </div>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {nav.links.map(link => (
            <button key={link} className="navbar__link" onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
          <button className="btn btn-primary navbar__cta" onClick={() => scrollTo('Contact')}>
            Enroll Now
          </button>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
