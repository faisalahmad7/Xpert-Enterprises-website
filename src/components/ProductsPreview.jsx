import { Link } from "../router.jsx"
import ProductsGrid from "./ProductsGrid.jsx"
import Reveal from "./Reveal.jsx"
import "./ProductsPreview.css"

export default function ProductsPreview() {
  return (
    <section id="products" className="section products-preview">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="section-eyebrow">What We Trade</p>
          <h2 className="section-heading">Certified organic products, sourced and shipped end to end.</h2>
          <p className="section-lede">
            A starting catalog of the categories we currently trade in -- each with its own page.
            Have something specific in mind? We source beyond this list too.
          </p>
        </Reveal>

        <ProductsGrid limit={3} />

        <div className="products-preview__more">
          <Link to="/products" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}