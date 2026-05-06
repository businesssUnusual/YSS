import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import './Gallery.css'

const { gallery } = siteContent
const assetPath = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`

// Add real images to /public/images/ — filenames listed here will be picked up automatically
const galleryImages = [
  { src: assetPath('images/gallery-1.png'), alt: 'Wheelie machine control drills' },
  { src: assetPath('images/gallery-2.png'), alt: 'Zero Circle foundation practice' },
  { src: assetPath('images/gallery-3.png'), alt: 'Static to rolling stoppie progression' },
  { src: assetPath('images/gallery-4.png'), alt: 'Leg Drag long wheelie control' },
  { src: assetPath('images/gallery-5.png'), alt: 'Controlled drifting session on track' },
  { src: assetPath('images/gallery-6.png'), alt: 'Human Compass balance training' },
  { src: assetPath('images/gallery-7.png'), alt: 'Circle wheelie coordination practice' },
  { src: assetPath('images/gallery-8.png'), alt: 'Headstand basics with coach supervision' },
  { src: assetPath('images/gallery-9.png'), alt: 'Complete stunt flow transition training' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header text-center">
          <span className="section-tag">{gallery.sectionTag}</span>
          <h2 className="section-headline">{gallery.headline}</h2>
          <p className="section-subheadline" style={{ margin: '12px auto 0' }}>{gallery.subheadline}</p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery__item gallery__item--${i % 3 === 0 ? 'wide' : 'normal'}`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={e => {
                  e.target.parentElement.classList.add('gallery__item--placeholder')
                  e.target.style.display = 'none'
                }}
              />

            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close">✕</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </section>
  )
}
