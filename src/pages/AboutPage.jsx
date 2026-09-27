import About from "../components/About.jsx"
import Services from "../components/Services.jsx"
import Process from "../components/Process.jsx"
import CtaBanner from "../components/CtaBanner.jsx"
import "./PageHeader.css"

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="pill-tag">About Us</span>
          <h1 className="page-header__title">The team behind every shipment.</h1>
          <p className="page-header__lede">
            Who we are, what we handle, and how a shipment moves from your first
            message to a delivery note in your hands.
          </p>
        </div>
      </header>
      <About compact />
      <Services />
      <Process />
      <CtaBanner />
    </>
  )
}


