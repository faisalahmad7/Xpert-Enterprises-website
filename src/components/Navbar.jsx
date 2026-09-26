import { useEffect, useState } from "react"
import { Link, useRouter } from "../router.jsx"
import { company, contact, navLinks } from "../config/siteConfig.js"
import "./Navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { path } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [path])

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/images/logo-mark.png" alt="" className="navbar__logo-mark" aria-hidden="true" />
          <span className="navbar__logo-name">{company.shortName}</span>
        </Link>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={path === link.to ? "navbar__link--active" : ""}>
              {link.label}
            </Link>
          ))}
          <a href={`tel:${contact.phoneDial}`} className="navbar__phone">
            {contact.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-accent navbar__cta">
            Get a Quote
          </Link>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
