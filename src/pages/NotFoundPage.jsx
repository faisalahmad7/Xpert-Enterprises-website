import { Link } from "../router.jsx"
import "./NotFoundPage.css"

export default function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>That page doesn't exist.</h1>
        <p>The page you're looking for may have moved or been renamed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
