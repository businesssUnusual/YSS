import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import './VideoReel.css'

const { reel } = siteContent
const videos = reel.videos

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`
const ytEmbed = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`

export default function VideoReel() {
  const [active, setActive] = useState(0)

  return (
    <section id="videoReel" className="reel">
      <hr className="gold-divider" />
      <div className="container">
        <div className="reel__header text-center">
          <span className="section-tag">{reel.sectionTag}</span>
          <h2 className="section-headline">{reel.headline}</h2>
          <p className="section-subheadline" style={{ margin: '12px auto 0' }}>{reel.subheadline}</p>
        </div>

        <div className="reel__player-wrap">
          <div className="reel__player">
            <iframe
              key={active}
              className="reel__video"
              src={ytEmbed(videos[active].youtubeId)}
              title={videos[active].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="reel__thumbnails">
            {videos.map((v, i) => (
              <div
                key={i}
                className={`reel__thumb ${active === i ? 'reel__thumb--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="reel__thumb-poster" style={{ backgroundImage: `url(${ytThumb(v.youtubeId)})` }}>
                  <span className="reel__thumb-play">▶</span>
                </div>
                <p className="reel__thumb-title">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="gold-divider" />
    </section>
  )
}
