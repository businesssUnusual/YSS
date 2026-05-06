import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import './Testimonials.css'

const { testimonials } = siteContent

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const items = testimonials.items

  const prev = () => setActive((active - 1 + items.length) % items.length)
  const next = () => setActive((active + 1) % items.length)

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header text-center">
          <span className="section-tag">{testimonials.sectionTag}</span>
          <h2 className="section-headline">{testimonials.headline}</h2>
        </div>

        <div className="testimonials__track">
          {items.map((t, i) => (
            <div
              key={i}
              className={`tcard ${i === active ? 'tcard--active' : i === (active + 1) % items.length ? 'tcard--next' : 'tcard--hidden'}`}
            >
              <div className="tcard__stars">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <blockquote className="tcard__quote">"{t.quote}"</blockquote>
              <div className="tcard__author">
                <div className="tcard__avatar">{t.name[0]}</div>
                <div>
                  <p className="tcard__name">{t.name}</p>
                  <p className="tcard__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__controls">
          <button className="tctrl" onClick={prev}>←</button>
          <div className="tctrl__dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={`tctrl__dot ${i === active ? 'tctrl__dot--active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button className="tctrl" onClick={next}>→</button>
        </div>
      </div>
    </section>
  )
}
