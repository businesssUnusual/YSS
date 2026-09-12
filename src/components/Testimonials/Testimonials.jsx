import { siteContent } from '../../content/siteContent'
import VideoShowcase from '../VideoShowcase/VideoShowcase'
import './Testimonials.css'

const { testimonials } = siteContent

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header text-center">
          <span className="section-tag">{testimonials.sectionTag}</span>
          <h2 className="section-headline">{testimonials.headline}</h2>
          <p className="section-subheadline">{testimonials.subheadline}</p>
        </div>

        <VideoShowcase videos={testimonials.videos} ariaLabelPrefix="Student review video" />
      </div>
    </section>
  )
}
