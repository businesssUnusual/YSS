import React, { useEffect, useRef } from 'react'
import { siteContent } from '../../content/siteContent'
import './Hero.css'

const { hero } = siteContent
const assetPath = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background video */}
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__video"
          src={assetPath('videos/hero-reel.mp4')}
          autoPlay
          muted
          loop
          playsInline
          poster={assetPath('images/image_5.jpg')}
        />
        <div className="hero__overlay" />
        <div className="hero__gradient-bottom" />
      </div>

      {/* Animated particles */}
      <div className="hero__particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="container hero__content">
        <p className="hero__badge">{hero.badge}</p>
        <p className="hero__tagline">{hero.tagline}</p>
        <h1 className="hero__headline">
          {hero.headline.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'hero__headline-accent' : ''}>{word} </span>
          ))}
        </h1>
        <p className="hero__sub">{hero.subheadline}</p>

        <div className="hero__actions">
          <button className="btn btn-primary" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
            {hero.cta1}
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById('videoReel').scrollIntoView({ behavior: 'smooth' })}>
            <span className="play-icon">▶</span>
            {hero.cta2}
          </button>
        </div>
      </div>
    </section>
  )
}
