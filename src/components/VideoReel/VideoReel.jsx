import { siteContent } from '../../content/siteContent'
import VideoShowcase from '../VideoShowcase/VideoShowcase'
import './VideoReel.css'

const { reel } = siteContent

export default function VideoReel() {
  return (
    <section id="videoReel" className="reel">
      <hr className="gold-divider" />
      <div className="container">
        <div className="reel__header text-center">
          <span className="section-tag">{reel.sectionTag}</span>
          <h2 className="section-headline">{reel.headline}</h2>
          <p className="section-subheadline">{reel.subheadline}</p>
        </div>

        <VideoShowcase videos={reel.videos} ariaLabelPrefix="Joining video" />
      </div>
      <hr className="gold-divider" />
    </section>
  )
}
