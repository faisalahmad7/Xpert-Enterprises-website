import { Link } from "../router.jsx"
import { products } from "../config/siteConfig.js"
import { ArrowRight } from "./icons.jsx"
import Reveal from "./Reveal.jsx"
import "./ProductsGrid.css"

// Shown in full on /products, and (via `limit`) as a teaser elsewhere.
// Layout is a "bento" grid: the first product is the big feature tile and
// the last one stretches across the bottom. The product list in
// siteConfig.js drives everything, so adding or removing products reflows
// the grid on its own.
export default function ProductsGrid({ limit }) {
  const items = limit ? products.slice(0, limit) : products

  return (
    <div className={`products-grid ${limit ? "products-grid--teaser" : ""}`}>
      {items.map((product, i) => (
        <Reveal key={product.slug} as="div" className="products-grid__cell" delay={(i % 4) * 90}>
          <Link to={`/products/${product.slug}`} className="products-grid__card">
            <img
              src={product.image}
              alt={product.name}
              className="products-grid__img"
              loading="lazy"
            />
            <span className="products-grid__shade" />
            <span className="products-grid__index">{String(i + 1).padStart(2, "0")}</span>

            <span className="products-grid__body">
              <span className="products-grid__text">
                <span className="products-grid__name">{product.name}</span>
                <span className="products-grid__tagline">{product.tagline}</span>
              </span>
              <span className="arrow-btn products-grid__arrow" aria-hidden="true">
                <ArrowRight width={22} height={22} />
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
