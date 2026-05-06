import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import './Programs.css'

const { programs } = siteContent

export default function Programs() {
  const [active, setActive] = useState(null)

  return (
    <section id="programs" className="programs">
      <hr className="gold-divider" />
      <div className="container">
        <div className="programs__header">
          <span className="section-tag">{programs.sectionTag}</span>
          <h2 className="section-headline">{programs.headline}</h2>
          <p className="section-subheadline">{programs.subheadline}</p>
        </div>

        <div className="programs__grid">
          {programs.items.map(prog => (
            <div
              key={prog.id}
              className={`program-card ${active === prog.id ? 'program-card--active' : ''}`}
              onClick={() => setActive(active === prog.id ? null : prog.id)}
            >
              <div className="program-card__top">
                <span className="program-card__icon">{prog.icon}</span>
                <div className="program-card__meta">
                  <span className="program-card__duration">⏱ {prog.duration}</span>
                  <span className="program-card__level">{prog.level}</span>
                </div>
              </div>

              <h3 className="program-card__title">{prog.title}</h3>
              <p className="program-card__desc">{prog.desc}</p>

              <div className={`program-card__details ${active === prog.id ? 'program-card__details--open' : ''}`}>
                <h4 className="program-card__details-head">What You'll Learn:</h4>
                <ul className="program-card__list">
                  {prog.highlights.map((h, i) => (
                    <li key={i}><span className="check">✦</span> {h}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
                  onClick={e => { e.stopPropagation(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                  Enroll Now
                </button>
              </div>

              <span className="program-card__toggle">{active === prog.id ? '✕' : '+'}</span>
            </div>
          ))}
        </div>
      </div>
      <hr className="gold-divider" />
    </section>
  )
}
