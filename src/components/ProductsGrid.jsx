import { Link } from "../router.jsx"
import { products } from "../config/siteConfig.js"
import "./ProductsGrid.css"

// Shown in full on /products, and (via `limit`) as a homepage teaser.
export default function ProductsGrid({ limit }) {
  const items = limit ? products.slice(0, limit) : products

  return (
    <div className="products-grid">
      {items.map((product, i) => (
        <Link key={product.slug} to={`/products/${product.slug}`} className="products-grid__card">
          <div
            className="products-grid__image"
            style={{ backgroundImage: `url(${product.image})` }}
            data-fallback={i % 3}
          >
            <span className="products-grid__image-fallback">{product.name.charAt(0)}</span>
          </div>
          <div className="products-grid__body">
            <h3 className="products-grid__name">{product.name}</h3>
            <p className="products-grid__tagline">{product.tagline}</p>
            <span className="products-grid__link">View Product &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
