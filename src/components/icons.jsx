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
