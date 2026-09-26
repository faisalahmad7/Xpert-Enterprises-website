import { Link } from "../router.jsx"
import { company, contact, navLinks, whatsappLink } from "../config/siteConfig.js"
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

        <div className="footer__contact">
          <h4>Reach Us</h4>
          <p>{contact.addressSingleLine}</p>
          <a className="bold" href={`tel:${contact.phoneDial}`}>{contact.phoneDisplay}</a>
          <a className="bold" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="bold" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
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
