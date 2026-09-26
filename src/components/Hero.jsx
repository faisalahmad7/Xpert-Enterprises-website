import { Link } from "../router.jsx"
import { company, whatsappLink } from "../config/siteConfig.js"
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob" aria-hidden="true" />
      <div className="container hero__inner">
        <img
          src="/images/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="hero__watermark"
        />
        <div className="hero__copy">
          <span className="pill-tag">Import &amp; Export &middot; Pune, India</span>
          <h1 className="hero__heading">
            Organic goods, moved across borders <span className="hero__heading-accent">the honest way.</span>
          </h1>
          <p className="hero__lede">
            {company.name} manages sourcing, shipping, customs clearance, and
            delivery for buyers and growers of certified organic products -
            as one team, not three vendors passing you along.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-card hero__panel-card--main">
            <span className="hero__panel-label">Live shipment</span>
            <span className="hero__panel-status">Customs Cleared</span>
            <div className="hero__panel-row">
              <span>Mode</span>
              <span>Ocean Freight, FCL</span>
            </div>
            <div className="hero__panel-row">
              <span>Route</span>
              <span>Pune &rarr; Destination</span>
            </div>
            <div className="hero__panel-row">
              <span>ETA</span>
              <span>On Schedule</span>
            </div>
          </div>
          <div className="hero__panel-card hero__panel-card--tag">100% Organic Certified</div>
        </div>
      </div>
    </section>
  )
}