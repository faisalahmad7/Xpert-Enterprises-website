import ProductsGrid from "../components/ProductsGrid.jsx"
import CtaBanner from "../components/CtaBanner.jsx"
import "./PageHeader.css"

export default function ProductsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="pill-tag">Our Products</span>
          <h1 className="page-header__title">Certified organic products, sourced and shipped.</h1>
          <p className="page-header__lede">
            A starting catalog of what we currently trade in. Click through to a
            product for details, or get in touch if you're after something
            specific -- we source beyond this list too.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <ProductsGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
