import React from 'react'
import { siteContent } from '../../content/siteContent'
import './About.css'

const { about } = siteContent

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">

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
