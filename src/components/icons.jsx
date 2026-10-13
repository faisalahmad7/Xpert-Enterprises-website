// Small inline icon set used by the Services grid. Plain stroke icons,
// single color via currentColor, so they inherit whatever tile color
// they're placed on.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export const icons = {
  sourcing: (props) => (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  export: (props) => (
    <svg {...base} {...props}>
      <path d="M4 12h13" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  ),
  customs: (props) => (
    <svg {...base} {...props}>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  freight: (props) => (
    <svg {...base} {...props}>
      <rect x="2" y="8" width="13" height="9" rx="1.2" />
      <path d="M15 11h3.5L21 14v3h-6" />
      <circle cx="6.5" cy="18.5" r="1.6" />
      <circle cx="16.5" cy="18.5" r="1.6" />
    </svg>
  ),
  warehouse: (props) => (
    <svg {...base} {...props}>
      <path d="M3 10.5L12 4l9 6.5" />
      <path d="M5 10v9h14v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  ),
  docs: (props) => (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 13h5M9.5 16.5h5" />
    </svg>
  ),
}

// ---- Small UI icons (arrows, checks, contact) ----
export const ArrowRight = (props) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (props) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export const Check = (props) => (
  <svg {...base} strokeWidth={2.2} {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const Phone = (props) => (
  <svg {...base} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const MapPin = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const Clock = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const WhatsApp = (props) => (
  <svg {...base} {...props}>
    <path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
    <path d="M9 9.2c.2 2.6 2.4 4.8 5 5l1.2-1.2-1.8-1-.8.6a3.3 3.3 0 0 1-1.6-1.6l.6-.8-1-1.8L9 9.2z" />
  </svg>
)

// Stat icons used on the homepage stats bar
export const Calendar = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
)

export const Globe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z" />
  </svg>
)

export const Box = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3z" />
    <path d="M4 7.2l8 4.3 8-4.3M12 11.5V21" />
  </svg>
)

export const Shield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7.5 3v5.4c0 4.4-3 8-7.5 9.6-4.5-1.6-7.5-5.2-7.5-9.6V6L12 3z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
)

export const Leaf = (props) => (
  <svg {...base} {...props}>
    <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
    <path d="M5 19c2-4 5-7 9-9" />
  </svg>
)
