import { whatsappLink } from "../config/siteConfig.js"
import "./WhatsAppButton.css"

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Message Xpert Enterprises on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.6a12.9 12.9 0 0 0 3.96.63c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm7.02 17.16c-.3.83-1.66 1.58-2.3 1.67-.6.09-1.37.13-2.2-.14-.5-.16-1.15-.37-1.98-.72-3.48-1.5-5.75-5-5.93-5.24-.17-.24-1.42-1.9-1.42-3.62 0-1.72.9-2.56 1.22-2.91.31-.34.68-.42.9-.42h.65c.21 0 .49-.08.77.58.3.71 1 2.44 1.09 2.62.09.18.15.4.03.64-.12.24-.18.4-.36.6-.18.22-.38.48-.54.64-.18.18-.37.38-.16.74.21.37.94 1.55 2.02 2.51 1.39 1.24 2.56 1.63 2.93 1.81.36.18.58.15.79-.09.21-.24.9-1.05 1.14-1.42.24-.36.48-.3.8-.18.33.12 2.06.97 2.41 1.15.36.18.6.27.68.42.09.16.09.9-.24 1.73Z"
        />
      </svg>
    </a>
  )
}
