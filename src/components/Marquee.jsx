import { products } from "../config/siteConfig.js"
import "./Marquee.css"

// A slow-scrolling band of the product categories. Built from the same
// product list as the rest of the site, so it updates automatically.
export default function Marquee() {
  const names = products.map((p) => p.name)
  const loop = [...names, ...names]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="marquee__item">
            {name}
            <i className="marquee__sep" />
          </span>
        ))}
      </div>
    </div>
  )
}
