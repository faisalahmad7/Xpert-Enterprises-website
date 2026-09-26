import { process } from "../config/siteConfig.js"
import Reveal from "./Reveal.jsx"
import "./Process.css"

export default function Process() {
  return (
    <section id="process" className="section section--alt process">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-heading">From enquiry to delivery, in five steps.</h2>
        </Reveal>

        <ol className="process__list">
          {process.map((item, i) => (
            <Reveal key={item.step} as="li" className="process__item" delay={i * 100}>
              <span className="process__dot">{item.step}</span>
              {i < process.length - 1 && <span className="process__connector" aria-hidden="true" />}
              <h3 className="process__title">{item.title}</h3>
              <p className="process__desc">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}