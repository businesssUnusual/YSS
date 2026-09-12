import { useState, useEffect, useRef } from 'react'
import { siteContent } from '../../content/siteContent'
import { navigateTo } from '../../utils/navigation'
import './Navbar.css'

const { nav } = siteContent

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    let rafId = null
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        rafId = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'programs', 'gallery', 'testimonials', 'contact']
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => navigateTo(id, () => setMenuOpen(false))

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

        <nav
          ref={navRef}
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          aria-label="Main navigation"
        >
          {nav.links.map(link => (
            <button
              key={link}
              className={`navbar__link${activeSection === link.toLowerCase() ? ' navbar__link--active' : ''}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
          <button className="btn btn-primary navbar__cta" onClick={() => scrollTo('Contact')}>
            Enroll Now
          </button>
        </nav>

        <button
          ref={burgerRef}
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
