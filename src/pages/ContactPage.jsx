import Contact from "../components/Contact.jsx"
import "./PageHeader.css"

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="pill-tag">Contact</span>
          <h1 className="page-header__title">Let's talk about your shipment.</h1>
          <p className="page-header__lede">
            Tell us what you need to move and where it's going -- or reach us
            directly by phone, email, or WhatsApp.
          </p>
        </div>
      </header>
      <Contact />
    </>
  )
}
