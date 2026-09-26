import { trustStats } from "../config/siteConfig.js"
import Reveal from "./Reveal.jsx"
import "./TrustStrip.css"

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-strip__inner">
        {trustStats.map((stat, i) => (
          <Reveal key={stat.label} as="div" className="trust-strip__item" delay={i * 100}>
            <span className="trust-strip__value">{stat.value}</span>
            <span className="trust-strip__label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}