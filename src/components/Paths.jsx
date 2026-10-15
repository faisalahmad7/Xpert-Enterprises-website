import { Link } from "../router.jsx"
import { pathImages } from "../config/siteConfig.js"
import { ArrowRight } from "./icons.jsx"
import Reveal from "./Reveal.jsx"
import "./Paths.css"

// Two entry points: someone who wants to buy, someone who wants to sell.
export default function Paths() {
  return (
    <section className="section paths">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">Work With Us</p>
          <h2 className="section-heading">
            Whether you're buying or selling, <span className="accent-serif">we move it.</span>
          </h2>
        </Reveal>

        <div className="paths__grid">
          <Reveal as="div" className="paths__card">
            <img src={pathImages.buyer} alt="" className="paths__img" loading="lazy" />
            <div className="paths__shade" />
            <div className="paths__body">
              <span className="paths__tag">For Buyers</span>
              <h3 className="paths__title">Source certified organic products from India.</h3>
              <p className="paths__text">
                Tell us what you need - grains, spices, pulses, oils, dry fruits, or something
                custom - and we handle sourcing, shipping, and customs through to delivery.
              </p>
              <Link to="/contact" className="btn btn-red">
                Request a Quote <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal as="div" className="paths__card" delay={120}>
            <img src={pathImages.seller} alt="" className="paths__img" loading="lazy" />
            <div className="paths__shade" />
            <div className="paths__body">
              <span className="paths__tag">For Growers &amp; Producers</span>
              <h3 className="paths__title">Take your produce to international buyers.</h3>
              <p className="paths__text">
                We prepare your goods and paperwork for export and manage freight and clearance,
                so you can stay focused on what you grow.
              </p>
              <Link to="/contact" className="btn btn-outline-light">
                Talk to Us <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
