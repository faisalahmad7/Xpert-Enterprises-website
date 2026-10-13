import { services } from "../config/siteConfig.js"
import { icons } from "./icons.jsx"
import Reveal from "./Reveal.jsx"
import "./Services.css"

export default function Services() {
  return (
    <section id="services" className="section section--dark dot-texture services">
      <div className="container services__wrap">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">What We Handle</p>
          <h2 className="section-heading">
            Six services, <span className="accent-serif accent-gold">one shipment file</span> from start to finish.
          </h2>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.name} as="div" className="services__card" delay={(i % 3) * 90}>
                <span className="services__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="services__icon">{Icon && <Icon width={26} height={26} />}</span>
                <h3 className="services__name">{service.name}</h3>
                <p className="services__desc">{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
