import { process } from "../config/siteConfig.js"
import Reveal from "./Reveal.jsx"
import "./Process.css"

export default function Process() {
  return (
    <section id="process" className="section section--alt process">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-heading">
            From enquiry to delivery, <span className="accent-serif">in five steps.</span>
          </h2>
        </Reveal>

        <ol className="process__list">
          {process.map((item, i) => (
            <Reveal key={item.step} as="li" className="process__item" delay={i * 110}>
              <span className="process__dot">{item.step}</span>
              <div className="process__card">
                <span className="process__ghost" aria-hidden="true">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="process__title">{item.title}</h3>
                <p className="process__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
