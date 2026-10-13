import { worldMap } from "../assets/worldMap.js"
import "./WorldMap.css"

// A dotted world map with animated trade routes fanning out from Pune.
// Purely decorative: the route endpoints are not tied to specific clients.
const [W, H] = worldMap.viewBox
const [ox, oy] = worldMap.origin

function arcPath([dx, dy]) {
  const mx = (ox + dx) / 2
  const my = (oy + dy) / 2
  const dist = Math.hypot(dx - ox, dy - oy)
  const cx = mx
  const cy = my - dist * 0.3
  return `M${ox} ${oy} Q${cx} ${cy} ${dx} ${dy}`
}

export default function WorldMap({ className = "", showPin = true }) {
  return (
    <div className={`worldmap ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} className="worldmap__svg" preserveAspectRatio="xMidYMid meet">
        <path d={worldMap.dots} className="worldmap__dots" />

        {worldMap.routes.map((dest, i) => (
          <g key={i}>
            <path d={arcPath(dest)} className="worldmap__arc" pathLength="1" />
            <path
              d={arcPath(dest)}
              className="worldmap__travel"
              pathLength="1"
              style={{ animationDelay: `${i * 0.9}s` }}
            />
            <circle cx={dest[0]} cy={dest[1]} r="2.6" className="worldmap__dest" />
            <circle
              cx={dest[0]}
              cy={dest[1]}
              r="2.6"
              className="worldmap__ring"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </g>
        ))}

        <circle cx={ox} cy={oy} r="4" className="worldmap__origin-ring" />
        <circle cx={ox} cy={oy} r="4" className="worldmap__origin-ring worldmap__origin-ring--late" />
        <circle cx={ox} cy={oy} r="4.4" className="worldmap__origin" />
      </svg>

      {showPin && (
        <span
          className="worldmap__pin"
          style={{ left: `${(ox / W) * 100}%`, top: `${(oy / H) * 100}%` }}
        >
          <strong>Pune, India</strong>
          <small>Our base</small>
        </span>
      )}
    </div>
  )
}
