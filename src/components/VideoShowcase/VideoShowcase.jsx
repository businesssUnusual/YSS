import { useState } from 'react'
import './VideoShowcase.css'

const ytThumbHQ = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
const ytThumb   = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`
// No autoplay param — playback only ever starts from an explicit user click.
const ytEmbed = (id) => `https://www.youtube.com/embed/${id}?rel=0`

export default function VideoShowcase({ videos, ariaLabelPrefix = 'Play video' }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)

  const labelFor = (i) => videos[i].label || `${ariaLabelPrefix} ${i + 1}`

  const selectVideo = (i) => {
    setActive(i)
    setPlaying(false)
  }

  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      selectVideo(i)
    }
  }

  return (
    <div className="vshow">
      <div className="vshow__player">
        {!playing && (
          <img
            key={`player-thumb-${active}`}
            src={ytThumb(videos[active].youtubeId)}
            alt=""
            className="vshow__player-bg"
            onError={e => {
              e.target.src = ytThumbHQ(videos[active].youtubeId)
              e.target.onerror = null
            }}
          />
        )}
        {playing ? (
          <iframe
            key={active}
            className="vshow__video"
            src={ytEmbed(videos[active].youtubeId)}
            title={labelFor(active)}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="vshow__play-overlay"
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
            aria-label={labelFor(active)}
            onKeyDown={(e) => handleKeyDown(e, active)}
          >
            <span className="vshow__play-btn">▶</span>
          </div>
        )}
      </div>

      <div className="vshow__thumbnails">
        {videos.map((v, i) => (
          <div
            key={i}
            className={`vshow__thumb ${active === i ? 'vshow__thumb--active' : ''}`}
            onClick={() => selectVideo(i)}
            role="button"
            tabIndex={0}
            aria-label={labelFor(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            <div className="vshow__thumb-poster">
              <img
                src={ytThumb(v.youtubeId)}
                alt=""
                loading="lazy"
                className="vshow__thumb-img"
                onError={e => { e.target.style.display = 'none' }}
              />
              <span className="vshow__thumb-play">▶</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
