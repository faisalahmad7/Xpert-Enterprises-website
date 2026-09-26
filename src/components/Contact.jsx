import { useState } from "react"
import {
  contact,
  mapEmbedSrc,
  mapLink,
  whatsappLink,
} from "../config/siteConfig.js"
import "./Contact.css"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  })

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const [status, setStatus] = useState("idle") // idle | sending | sent | error

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus("sending")
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        details: form.details,
        _subject: `Shipment enquiry from ${form.name || "website visitor"}`,
      }),
    })
    if (!res.ok) throw new Error("Request failed")
    setStatus("sent")
    setForm({ name: "", company: "", email: "", phone: "", details: "" })
  } catch {
    setStatus("error")
  }
}

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-heading">
          Tell us what you need to move, and where it's going.
        </h2>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field-row">
              <label className="contact__field">
                Name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                />
              </label>
              <label className="contact__field">
                Company
                <input
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                />
              </label>
            </div>

            <div className="contact__field-row">
              <label className="contact__field">
                Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                />
              </label>
              <label className="contact__field">
                Phone
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                />
              </label>
            </div>

            <label className="contact__field">
              Shipment details
              <textarea
                rows={5}
                required
                placeholder="What are you shipping, from where, to where, and roughly when?"
                value={form.details}
                onChange={update("details")}
              />
            </label>

                        <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Enquiry"}
            </button>
            {status === "sent" && (
              <p className="contact__form-note">
                Thanks — your enquiry is on its way.
              </p>
            )}
            {status === "error" && (
              <p className="contact__form-note">
                That didn't go through — please email {contact.email} or
                message us on WhatsApp instead.
              </p>
            )}
          </form>

          <div className="contact__details">
            <div className="contact__detail-block">
              <h3>Visit us</h3>
              <p>
                {contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>

            <div className="contact__detail-block">
              <h3>Call or write</h3>
              <p>
                <a href={`tel:${contact.phoneDial}`}>{contact.phoneDisplay}</a>
                <br />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </div>

            <div className="contact__detail-block">
              <h3>Hours</h3>
              <p>{contact.hours}</p>
            </div>

            <div className="contact__map">
              <iframe
                title="Expert Enterprises location"
                src={mapEmbedSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
