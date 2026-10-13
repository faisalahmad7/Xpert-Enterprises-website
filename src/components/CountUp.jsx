import { useEffect, useRef, useState } from "react"

// Animates a stat like "400+" or "98%" from 0 up to its number when it
// scrolls into view. Anything that isn't "number + suffix" is shown as is.
export default function CountUp({ value, duration = 1600 }) {
  const match = /^(\d+)(.*)$/.exec(String(value).trim())
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ""
  const ref = useRef(null)
  const [shown, setShown] = useState(target === null ? null : 0)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setShown(target)
      return
    }

    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setShown(Math.round(target * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])

  if (target === null) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  )
}
