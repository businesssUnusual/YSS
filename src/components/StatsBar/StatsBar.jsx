import React from 'react'
import { siteContent } from '../../content/siteContent'
import './StatsBar.css'

const { stats } = siteContent

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-bar__grid">
        {stats.map((s, i) => (
          <div className="stats-bar__item" key={i}>
            <span className="stats-bar__value">{s.value}</span>
            <span className="stats-bar__label">{s.label}</span>
            {i < stats.length - 1 && <span className="stats-bar__sep" />}
          </div>
        ))}
      </div>
    </section>
  )
}
