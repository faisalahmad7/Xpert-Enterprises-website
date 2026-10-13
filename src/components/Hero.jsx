import { Link } from "../router.jsx"
import { company, heroImages, whatsappLink } from "../config/siteConfig.js"
import WorldMap from "./WorldMap.jsx"
import { ArrowRight, Check, WhatsApp } from "./icons.jsx"
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />


      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            Import &amp; Export &middot; Pune, India
          </span>

          <h1 className="hero__heading">
            <span className="hero__line">Organic goods,</span>
            <span className="hero__line">moved across borders</span>
          </h1>

          <p className="hero__lede">
            {company.name} manages sourcing, shipping, customs clearance, and
            delivery for buyers and growers of certified organic products -
            as one team, not three vendors passing you along.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn-gold">
              Request a Quote <ArrowRight width={18} height={18} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <WhatsApp width={18} height={18} /> Message on WhatsApp
            </a>
          </div>

          <ul className="hero__checks">
            {["Sourcing", "Freight", "Customs", "Delivery"].map((item) => (
              <li key={item}>
                <Check width={15} height={15} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          {/* Large brand emblem behind the hero: logo mark inside a slowly turning seal ring */}
          <div className="hero__emblem" aria-hidden="true">
            <svg className="hero__emblem-ring" viewBox="0 0 400 400">
              <defs>
                <path id="hero-ring-path" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" />
              </defs>
              <circle cx="200" cy="200" r="196" className="hero__emblem-line" />
              <circle cx="200" cy="200" r="152" className="hero__emblem-line hero__emblem-line--thin" />
              <text className="hero__emblem-text">
                <textPath href="#hero-ring-path" startOffset="0" textLength="1096" lengthAdjust="spacing">
                  XPERT ENTERPRISES &#9670; IMPORT &amp; EXPORT &#9670; PUNE, INDIA &#9670;
                </textPath>
              </text>
            </svg>
            <img className="hero__emblem-mark" src="/images/logo-mark.png" alt="" />
          </div>

          <div className="hero__map">
            <WorldMap />
          </div>

          <div className="hero__cards" aria-hidden="true">
          <figure className="hero__photo hero__photo--a">
            <img src={heroImages.primary} alt="" loading="eager" />
            <figcaption>Organic Spices</figcaption>
          </figure>

          <figure className="hero__photo hero__photo--b">
            <img src={heroImages.secondary} alt="" loading="eager" />
            <figcaption>Dry Fruits &amp; Nuts</figcaption>
          </figure>

          <div className="hero__badge">
            <span className="hero__badge-icon">
              <Check width={16} height={16} />
            </span>
            <span>
              <strong>Customs Cleared</strong>
              <small>Handled for you</small>
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
