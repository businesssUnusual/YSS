import React, { useState, useEffect, useCallback } from 'react'
import { siteContent } from '../../content/siteContent'
import { galleryCategories } from '../../content/galleryData'
import './Gallery.css'

const { gallery } = siteContent

const coverImageByCategory = {
  training: '/images/Student Training Session/image_4.png',
  shows: '/images/Stunt Shows/image_4.JPG',
  results: '/images/Student Result/image_9.jpg',
  events: '/images/Event and Colloboration/image_21.jpg',
  founder: '/images/Founder Stunts/image_26.png',
  ptp: '/images/PTP/image_21.JPG',
}

// Build image src — let the browser encode the URL naturally
const imgSrc = (rawPath) => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return base + encodeURI(rawPath)
}

export default function Gallery() {
  // lightbox: { catIdx, imgIdx } | null
  const [lightbox, setLightbox] = useState(null)
  const [failedImages, setFailedImages] = useState([])

  const markImageFailed = useCallback((rawPath) => {
    setFailedImages(prev => (prev.includes(rawPath) ? prev : [...prev, rawPath]))
  }, [])

  const clearImageFailed = useCallback((rawPath) => {
    setFailedImages(prev => prev.filter(path => path !== rawPath))
  }, [])

  const openLightbox = (catIdx, imgIdx) => setLightbox({ catIdx, imgIdx })
  const closeLightbox = () => setLightbox(null)

  const prevImage = useCallback(() => {
    setLightbox(prev => {
      const total = galleryCategories[prev.catIdx].images.length
      return { ...prev, imgIdx: (prev.imgIdx - 1 + total) % total }
    })
  }, [])

  const nextImage = useCallback(() => {
    setLightbox(prev => {
      const total = galleryCategories[prev.catIdx].images.length
      return { ...prev, imgIdx: (prev.imgIdx + 1) % total }
    })
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prevImage, nextImage])

  const activeCat = lightbox ? galleryCategories[lightbox.catIdx] : null
  const activeImg = activeCat ? activeCat.images[lightbox.imgIdx] : null

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header text-center">
          <span className="section-tag">{gallery.sectionTag}</span>
          <h2 className="section-headline">{gallery.headline}</h2>
          <p className="section-subheadline" style={{ margin: '12px auto 0' }}>{gallery.subheadline}</p>
        </div>

        <div className="gallery__categories">
          {galleryCategories.map((cat, catIdx) => {
            const preferredCover = coverImageByCategory[cat.key]
            const coverIdx = preferredCover ? cat.images.indexOf(preferredCover) : 0
            const resolvedCoverIdx = coverIdx >= 0 ? coverIdx : 0
            const coverPath = cat.images[resolvedCoverIdx]

            return (
              <div key={cat.key} className="gallery__category">
                <div className="gallery__category-header">
                  <span className="gallery__category-icon">{cat.icon}</span>
                  <h3 className="gallery__category-title">{cat.label}</h3>
                </div>
                <div
                  className={`gallery__preview ${failedImages.includes(coverPath) ? 'gallery__item--placeholder' : ''}`}
                  onClick={() => openLightbox(catIdx, resolvedCoverIdx)}
                >
                  {coverPath && (
                    <img
                      src={imgSrc(coverPath)}
                      alt={`${cat.label} cover`}
                      loading="lazy"
                      onError={() => markImageFailed(coverPath)}
                      onLoad={() => clearImageFailed(coverPath)}
                      style={{ display: failedImages.includes(coverPath) ? 'none' : 'block' }}
                    />
                  )}
                  <div className="gallery__preview-overlay">
                    <span className="gallery__preview-meta">{cat.images.length} photos</span>
                    <span className="gallery__preview-cta">Open Gallery</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && activeCat && activeImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <div className="lightbox__meta">
              <span className="lightbox__cat">{activeCat.icon} {activeCat.label}</span>
              <span className="lightbox__counter">{lightbox.imgIdx + 1} / {activeCat.images.length}</span>
            </div>

            <div className="lightbox__stage">
              <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prevImage() }} aria-label="Previous">‹</button>
              <img src={imgSrc(activeImg)} alt={`${activeCat.label} – photo ${lightbox.imgIdx + 1}`} />
              <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); nextImage() }} aria-label="Next">›</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
