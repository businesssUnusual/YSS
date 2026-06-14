import React, { useState, useEffect } from 'react'
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
import { LegalModal, LegalPage } from './components/Legal/Legal'

function App() {
  const [loading, setLoading] = useState(true)
  const [legalModalType, setLegalModalType] = useState(null)
  const getInitialPath = () => {
  const params = new URLSearchParams(window.location.search)
  const redirect = params.get('redirect')

  if (redirect) {
    return redirect
  }

  return window.location.pathname
}

const [path, setPath] = useState(getInitialPath())

  const isPrivacyPage = path === '/privacy'
  const isTermsPage = path === '/termandcondition'
  const isFaqPage = path === '/faq'
  const legalPageType = isPrivacyPage ? 'privacy' : isTermsPage ? 'terms' : isFaqPage ? 'faq' : null

  const openLegalModal = (type) => setLegalModalType(type)
  const closeLegalModal = () => setLegalModalType(null)

  const openLegalPage = (type) => {
    const pagePathByType = {
      privacy: '/privacy',
      terms: '/termandcondition',
      faq: '/faq',
    }
    const nextPath = pagePathByType[type] || '/'
    window.history.pushState({}, '', nextPath)
    setLegalModalType(null)
    setPath(nextPath)
  }

  const closeLegalPage = () => {
    window.history.pushState({}, '', '/')
    setPath('/')
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (legalPageType) {
    return <LegalPage type={legalPageType} onBack={closeLegalPage} />
  }

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
      <ScrollToTop />
      <LegalModal type={legalModalType} onClose={closeLegalModal} onOpenPage={openLegalPage} />
    </div>
  )
}

export default App
