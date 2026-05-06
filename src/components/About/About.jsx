import React from 'react'
import { siteContent } from '../../content/siteContent'
import './About.css'

const { about } = siteContent
const assetPath = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`

// Replace with real images in /public/images/
const aboutImages = [
  assetPath('images/about-1.png'),
  assetPath('images/about-2.png'),
  assetPath('images/about-3.png'),
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">

        {/* IMAGE COLLAGE */}
        <div className="about__media">
          <div className="about__img-grid">
            <div className="about__img-main">
              <img src={aboutImages[0]} alt="Stunt training main" loading="lazy"
                onError={e => { e.target.style.background = '#1a1a1a'; e.target.src = '' }} />
              <div className="about__img-badge">
                <span className="about__img-badge-num">15+</span>
                <span className="about__img-badge-txt">Years of Excellence</span>
              </div>
            </div>
            <div className="about__img-stack">
              <div className="about__img-sm">
                <img src={aboutImages[1]} alt="Combat training" loading="lazy"
                  onError={e => { e.target.style.background = '#222'; e.target.src = '' }} />
              </div>
              <div className="about__img-sm">
                <img src={aboutImages[2]} alt="Parkour training" loading="lazy"
                  onError={e => { e.target.style.background = '#222'; e.target.src = '' }} />
              </div>
            </div>
          </div>
          <div className="about__decor-ring" />
        </div>

        {/* TEXT */}
        <div className="about__text">
          <span className="section-tag">{about.sectionTag}</span>
          <h2 className="section-headline">{about.headline}</h2>

          <div className="about__paragraphs">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__highlights">
            {about.highlights.map((h, i) => (
              <div className="about__highlight-card" key={i}>
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <h4 className="about__highlight-title">{h.title}</h4>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" style={{ marginTop: '32px' }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Join the School
          </button>
        </div>

      </div>
    </section>
  )
}
