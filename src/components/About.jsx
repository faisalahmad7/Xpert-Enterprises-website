import { Link } from "../router.jsx"
import { about, aboutImages } from "../config/siteConfig.js"
import { ArrowRight, Check } from "./icons.jsx"
import Reveal from "./Reveal.jsx"
import "./About.css"

export default function About({ compact }) {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <Reveal as="div" className="about__media">
          <div className="about__photo about__photo--large">
            <img src={aboutImages.large} alt="Assorted organic pulses and grains" loading="lazy" />
          </div>
          <div className="about__photo about__photo--small">
            <img src={aboutImages.small} alt="Ghee and honey" loading="lazy" />
          </div>
          <div className="about__badge">
            <img src="/images/logo-mark.png" alt="" aria-hidden="true" />
            <span>
              <strong>Pune to the world</strong>
              <small>Import &amp; Export</small>
            </span>
          </div>
        </Reveal>

        <Reveal as="div" className="about__text" delay={120}>
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="about__paragraph">
              {p}
            </p>
          ))}

          <ul className="about__points">
            {about.points.map((point) => (
              <li key={point} className="about__point">
                <span className="about__point-mark" aria-hidden="true">
                  <Check width={14} height={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          {!compact && (
            <Link to="/about" className="btn btn-primary about__cta">
              More About Us <ArrowRight width={18} height={18} />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
