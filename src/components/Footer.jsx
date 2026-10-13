import { Link } from "../router.jsx"
import { company, contact, navLinks, products, whatsappLink } from "../config/siteConfig.js"
import { Mail, MapPin, Phone, WhatsApp } from "./icons.jsx"
import "./Footer.css"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src="/images/logo-mark.png" alt="" className="footer__logo-mark" aria-hidden="true" />
            <span className="footer__logo">{company.shortName}</span>
          </div>
          <p className="footer__tagline">{company.tagline}</p>
          <p className="footer__blurb">
            Certified organic products, sourced, shipped, and cleared through customs by one team
            in Pune, India.
          </p>
        </div>

        <nav className="footer__nav">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav">
          <h4>Products</h4>
          <ul>
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h4>Reach Us</h4>
          <p className="footer__row">
            <MapPin width={18} height={18} />
            <span>{contact.addressSingleLine}</span>
          </p>
          <a className="footer__row bold" href={`tel:${contact.phoneDial}`}>
            <Phone width={18} height={18} />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a className="footer__row bold" href={`mailto:${contact.email}`}>
            <Mail width={18} height={18} />
            <span>{contact.email}</span>
          </a>
          <a className="footer__row bold" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsApp width={18} height={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          &copy; {year} {company.name}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
