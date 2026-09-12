import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StatsBar from './components/StatsBar/StatsBar'
import About from './components/About/About'
import Programs from './components/Programs/Programs'
import Gallery from './components/Gallery/Gallery'
import VideoReel from './components/VideoReel/VideoReel'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'
import { LegalPage } from './components/Legal/Legal'

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" style={{ width: `${pct}%` }} aria-hidden="true" />
}

function MainLayout() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">
          <div className="loader-logo">YSS</div>
          <div className="loader-bar"><div className="loader-bar-fill" /></div>
          <p className="loader-text">YOGI STUNT SCHOOL</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Programs />
        <Gallery />
        <VideoReel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  )
}

function LegalRoute({ type }) {
  const navigate = useNavigate()
  return <LegalPage type={type} onBack={() => navigate('/')} />
}

function WhatsAppRedirect() {
  useEffect(() => {
    window.location.replace('https://wa.me/919296877891?text=Hi%20Yogi%20Stunt%20School%2C%20I%E2%80%99m%20contacting%20you%20through%20your%20website.%20I%E2%80%99d%20like%20to%20know%20more%20about%20stunt%20training')
  }, [])
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'sans-serif' }}>
      Redirecting to WhatsApp…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy" element={<LegalRoute type="privacy" />} />
        <Route path="/termandcondition" element={<LegalRoute type="terms" />} />
        <Route path="/faq" element={<LegalRoute type="faq" />} />
        <Route path="/whatsapp" element={<WhatsAppRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}
