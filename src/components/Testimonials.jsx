import { testimonials } from "../config/siteConfig.js"
import Reveal from "./Reveal.jsx"
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">In Clients' Words</p>
          <h2 className="section-heading">Placeholder quotes -- swap in real client feedback.</h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} as="div" className="testimonials__wrap" delay={i * 100}>
              <figure className="testimonials__item">
                <span className="testimonials__quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="testimonials__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.org}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
