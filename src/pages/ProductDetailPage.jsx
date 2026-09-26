import { Link } from "../router.jsx"
import { products, whatsappLink } from "../config/siteConfig.js"
import "./PageHeader.css"
import "./ProductDetailPage.css"

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <section className="section">
        <div className="container product-detail__not-found">
          <h1>Product not found</h1>
          <p>We couldn't find that product. It may have been renamed or removed.</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  const idx = products.findIndex((p) => p.slug === params.slug)
  const related = products.filter((_, i) => i !== idx).slice(0, 3)

  return (
    <>
      <header className="page-header product-detail__header">
        <div className="container">
          <Link to="/products" className="product-detail__back">&larr; All Products</Link>
          <span className="pill-tag">Product</span>
          <h1 className="page-header__title">{product.name}</h1>
          <p className="page-header__lede">{product.tagline}</p>
        </div>
      </header>

      <section className="section">
        <div className="container product-detail__grid">
          <div
            className="product-detail__image"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <span className="product-detail__image-fallback">{product.name.charAt(0)}</span>
          </div>

          <div className="product-detail__body">
            <p className="section-lede">{product.description}</p>

            <h3 className="product-detail__highlights-title">Highlights</h3>
            <ul className="product-detail__highlights">
              {product.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="product-detail__actions">
              <Link to="/contact" className="btn btn-primary">
                Enquire About This Product
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head">
              <p className="section-eyebrow">You Might Also Need</p>
              <h2 className="section-heading">Other products we trade in</h2>
            </div>
            <div className="product-detail__related">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="product-detail__related-card">
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <span>View Product &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
