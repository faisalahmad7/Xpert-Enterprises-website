import { about } from "../config/siteConfig.js"
import "./About.css"

export default function About({ compact }) {
  return (
    <section id="about" className={`section about ${compact ? "" : "section--alt"}`}>
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="about__paragraph">
              {p}
            </p>
          ))}
        </div>

        <ul className="about__points">
          {about.points.map((point) => (
            <li key={point} className="about__point">
              <span className="about__point-mark" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
