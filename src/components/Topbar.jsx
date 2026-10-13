import { contact, whatsappLink } from "../config/siteConfig.js"
import { Clock, Mail, MapPin, Phone, WhatsApp } from "./icons.jsx"
import "./Topbar.css"

// Slim contact strip above the navbar. Hidden on small screens, where the
// navbar's own call button and the floating WhatsApp button cover it.
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item">
            <MapPin width={15} height={15} /> Nana Peth, Pune, India
          </span>
          <span className="topbar__item topbar__item--hours">
            <Clock width={15} height={15} /> {contact.hours}
          </span>
        </div>
        <div className="topbar__group">
          <a className="topbar__item topbar__link" href={`tel:${contact.phoneDial}`}>
            <Phone width={15} height={15} /> {contact.phoneDisplay}
          </a>
          <a className="topbar__item topbar__link" href={`mailto:${contact.email}`}>
            <Mail width={15} height={15} /> {contact.email}
          </a>
          <a
            className="topbar__item topbar__link topbar__wa"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp width={15} height={15} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
