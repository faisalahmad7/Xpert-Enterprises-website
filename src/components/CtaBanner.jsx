import { Link } from "../router.jsx"
import { whatsappLink } from "../config/siteConfig.js"
import WorldMap from "./WorldMap.jsx"
import { ArrowRight, WhatsApp } from "./icons.jsx"
import Reveal from "./Reveal.jsx"
import "./CtaBanner.css"

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__map">
        <WorldMap showPin={false} />
      </div>
      <Reveal as="div" className="container cta-banner__inner">
        <div>
          <p className="section-eyebrow">Let's Talk</p>
          <h2 className="cta-banner__heading">
            Ready to move your next <span className="accent-serif accent-red">shipment?</span>
          </h2>
          <p className="cta-banner__text">
            Send us your requirement and we'll come back with a clear plan, route, and timeline.
          </p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn-red">
            Request a Quote <ArrowRight width={18} height={18} />
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            <WhatsApp width={18} height={18} /> Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
