import { testimonials } from "../config/siteConfig.js"
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">In Clients' Words</p>
          <h2 className="section-heading">Placeholder quotes -- swap in real client feedback.</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.quote} className="testimonials__item">
              <span className="testimonials__quote-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                {t.name}, <span>{t.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
