import { trustStats } from "../config/siteConfig.js"
import { Calendar, Globe, Box, Shield } from "./icons.jsx"
import CountUp from "./CountUp.jsx"
import Reveal from "./Reveal.jsx"
import "./TrustStrip.css"

// One icon per stat, in the same order as trustStats in siteConfig.js.
const statIcons = [Calendar, Globe, Box, Shield]

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <Reveal as="div" className="container">
        <div className="trust-strip__card">
          {trustStats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length]
            return (
              <div key={stat.label} className="trust-strip__item">
                <span className="trust-strip__icon">
                  <Icon width={22} height={22} />
                </span>
                <span className="trust-strip__text">
                  <span className="trust-strip__value">
                    <CountUp value={stat.value} />
                  </span>
                  <span className="trust-strip__label">{stat.label}</span>
                </span>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
