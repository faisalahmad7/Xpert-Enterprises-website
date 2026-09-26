// -----------------------------------------------------------------
// All editable business content lives in this one file. Update
// contact details, copy, and products here without touching any
// component code.
// -----------------------------------------------------------------

export const company = {
  name: "Xpert Enterprises",
  shortName: "Xpert Enterprises",
  proprietor: "Imran Shaikh",
  tagline: "Global Trade. Global Trust.",
}

export const contact = {
  addressLines: [
    "Shop no. 8, 549, Nana Peth,",
    "Kulsum Complex, Pune City - 411002",
    "Maharashtra, India",
  ],
  addressSingleLine:
    "Shop no. 8, 549, Nana Peth, Kulsum Complex, Pune City - 411002, Maharashtra, India",
  phoneDisplay: "+91 92703 30016",
  phoneDial: "+919270330016",
  whatsappNumber: "919270330016",
  whatsappMessage: "Hi Xpert Enterprises, I'd like to enquire about a shipment.",
  email: "indianism2@gmail.com",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM IST",
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.addressSingleLine
)}&output=embed`

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.addressSingleLine
)}`

// Top-level pages, used by the Navbar and Footer.
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
]

// PLACEHOLDER - replace with your real, verifiable numbers before launch.
export const trustStats = [
  { value: "12+", label: "Years Trading" },
  { value: "10+", label: "Countries Served" },
  { value: "400+", label: "Shipments Handled" },
  { value: "98%", label: "On-Time Delivery" },
]

export const about = {
  eyebrow: "About Xpert Enterprises",
  heading: "A trading partner that stays on the shipment, not just the sale.",
  paragraphs: [
    "Xpert Enterprises is a Pune-based importer and exporter of certified organic products, run by proprietor Imran Shaikh. We work with growers, processors, and international buyers who need goods to move across borders without the process falling on their own desk.",
    "Rather than handing you off between a sourcing agent, a freight broker, and a customs house agent, we manage the whole chain ourselves - from the first enquiry to the delivery note you sign at the end.",
  ],
  points: [
    "One point of contact for sourcing, freight, and customs",
    "Direct relationships with growers, processors, and clearing agents",
    "Organic certification and documentation checked before it reaches a customs desk",
  ],
}

// "What We Do" - shown as an icon-card grid on the homepage.
// icon must match a key exported from components/icons.jsx
export const services = [
  {
    icon: "sourcing",
    name: "Organic Sourcing",
    description:
      "We identify and vet certified-organic growers and processors, and manage quality checks before goods ship.",
  },
  {
    icon: "export",
    name: "Export Facilitation",
    description:
      "We prepare your goods and paperwork for international buyers, from packing lists to shipping instructions.",
  },
  {
    icon: "customs",
    name: "Customs Clearance",
    description:
      "We file the paperwork, settle the right duties, and clear shipments at Indian ports without goods sitting in bond.",
  },
  {
    icon: "freight",
    name: "Freight & Logistics",
    description:
      "We book ocean, air, or road freight and track it door to door, whichever way it needs to move.",
  },
  {
    icon: "warehouse",
    name: "Warehousing & Handling",
    description:
      "We store, consolidate, and repack shipments before they go out, so nothing moves before it's ready.",
  },
  {
    icon: "docs",
    name: "Documentation & Compliance",
    description:
      "We handle bills of lading, organic certificates, and licensing so a shipment isn't held up on a technicality.",
  },
]

export const process = [
  { step: "1", title: "Enquiry", description: "Tell us what you need to move, and where it's going." },
  { step: "2", title: "Quote & Terms", description: "We price the route, the paperwork, and the timeline, and agree terms upfront." },
  { step: "3", title: "Sourcing & Prep", description: "We source, inspect, and prepare your goods for shipment." },
  { step: "4", title: "Shipping & Clearance", description: "We book freight, handle customs on both ends, and keep you posted." },
  { step: "5", title: "Delivery", description: "Your goods arrive, and you get the paperwork to prove it." },
]

// -----------------------------------------------------------------
// PRODUCTS - PLACEHOLDER CATEGORIES.
// The business card only says "Importer Exporter in Organic Products,"
// with no specific list, so these six are a reasonable starting
// catalog, not the confirmed real one. Rename, delete, or add to this
// list freely - every page on the site (grid + detail pages) is
// generated from it, nothing else needs editing.
//
// `image` is a path under /public/images/products/ - see IMAGE_GUIDE.md
// in the project root for exact search terms and free stock sources.
// Until a file exists at that path, the card just shows its colour
// wash background, so nothing breaks.
// -----------------------------------------------------------------
export const products = [
  {
    slug: "organic-grains-cereals",
    name: "Organic Grains & Cereals",
    tagline: "Rice, wheat, and millets grown to certified organic standard.",
    image: "/images/products/organic-grains.jpg",
    description:
      "We source certified-organic rice, wheat, and millets directly from grower cooperatives, with full traceability back to the farm and lab-tested batches before export.",
    highlights: [
      "Basmati & non-basmati rice, wheat, jowar, bajra, ragi",
      "India Organic (NPOP) certification available on request",
      "Bulk and container-load quantities, packed to buyer specification",
    ],
  },
  {
    slug: "organic-spices-herbs",
    name: "Organic Spices & Herbs",
    tagline: "Whole and ground spices, sourced at origin.",
    image: "/images/products/organic-spices.jpg",
    description:
      "From turmeric and chilli to cardamom and pepper, we work with organic spice growers across India's key growing regions and handle cleaning, grading, and export packing in-house.",
    highlights: [
      "Turmeric, chilli, coriander, cumin, pepper, cardamom",
      "Whole, ground, or custom blends on request",
      "Moisture-controlled, food-grade export packaging",
    ],
  },
  {
    slug: "organic-pulses-legumes",
    name: "Organic Pulses & Legumes",
    tagline: "Lentils, beans, and chickpeas for global kitchens.",
    image: "/images/products/organic-pulses.jpg",
    description:
      "We supply a full range of organic pulses - toor, moong, chana, and more - sorted and cleaned to international food-safety standards before they leave India.",
    highlights: [
      "Toor dal, moong, chana, urad, masoor",
      "Machine-cleaned and sortex-graded",
      "Flexible order sizes for traders and processors",
    ],
  },
  {
    slug: "organic-oils-ghee",
    name: "Organic Oils & Ghee",
    tagline: "Cold-pressed oils and traditionally made ghee.",
    image: "/images/products/organic-oils.jpg",
    description:
      "Cold-pressed groundnut, mustard, and coconut oils, alongside traditionally churned ghee, sourced from certified organic processors and export-packed to prevent spoilage in transit.",
    highlights: [
      "Groundnut, mustard, sesame, and coconut oil",
      "Cow-milk ghee, traditionally churned",
      "Export-grade sealed containers and drums",
    ],
  },
  {
    slug: "organic-dry-fruits",
    name: "Organic Dry Fruits & Nuts",
    tagline: "Almonds, cashews, and raisins, quality-graded.",
    image: "/images/products/organic-dry-fruits.jpg",
    description:
      "We source and grade organic dry fruits and nuts for export, with quality checks at every stage from procurement to final packing.",
    highlights: [
      "Cashews, almonds, raisins, dates",
      "Grade-sorted and moisture-tested",
      "Retail-ready or bulk export packaging",
    ],
  },
  {
    slug: "custom-sourcing",
    name: "Custom Sourcing Solutions",
    tagline: "Looking for something not listed here?",
    image: "/images/products/custom-sourcing.jpg",
    description:
      "If you need an organic product that isn't in our standard catalog, tell us your requirement - we'll explore sourcing options across our grower and processor network and come back with what's possible.",
    highlights: [
      "Requirement-based sourcing, not limited to a fixed catalog",
      "Sample runs available before a full order",
      "One point of contact from enquiry to delivery",
    ],
  },
]

// PLACEHOLDER - replace with real client names and quotes before launch.
export const testimonials = [
  {
    quote: "Xpert Enterprises cleared our first import shipment in days, not weeks. We didn't have to chase them once.",
    name: "Procurement Lead",
    org: "[Client company name]",
  },
  {
    quote: "Having one team handle sourcing and customs instead of three separate vendors saved us more time than the fees ever cost us.",
    name: "Operations Manager",
    org: "[Client company name]",
  },
  {
    quote: "They flagged a certification issue before it reached the port, which would have cost us a week in demurrage.",
    name: "Export Manager",
    org: "[Client company name]",
  },
]
