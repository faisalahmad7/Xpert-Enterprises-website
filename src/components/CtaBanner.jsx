import { Link } from "../router.jsx"
import { whatsappLink } from "../config/siteConfig.js"
import Reveal from "./Reveal.jsx"
import "./CtaBanner.css"

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <Reveal as="div" className="container cta-banner__inner">
        <h2 className="cta-banner__heading">Ready to move your next shipment?</h2>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn-accent">
            Request a Quote
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}