import Hero from "../components/Hero.jsx"
import TrustStrip from "../components/TrustStrip.jsx"
import Marquee from "../components/Marquee.jsx"
import About from "../components/About.jsx"
import Paths from "../components/Paths.jsx"
import Services from "../components/Services.jsx"
import ProductsPreview from "../components/ProductsPreview.jsx"
import Process from "../components/Process.jsx"
import Testimonials from "../components/Testimonials.jsx"
import CtaBanner from "../components/CtaBanner.jsx"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Marquee />
      <About />
      <ProductsPreview />
      <Services />
      <Paths />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
