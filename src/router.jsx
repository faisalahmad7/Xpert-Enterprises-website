import { createContext, useContext, useEffect, useState, useCallback } from "react"

// A small, dependency-free client-side router. Handles path matching with
// ":param" segments, pushState navigation, and back/forward support.
// No npm install required.

const RouterContext = createContext(null)

function getPath() {
  return window.location.pathname || "/"
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(getPath())

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = useCallback((to) => {
    if (to === getPath()) return
    window.history.pushState({}, "", to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error("useRouter must be used inside RouterProvider")
  return ctx
}

// Matches a "/products/:slug" style pattern against a real path.
// Returns a params object on match, or null.
export function matchPath(pattern, path) {
  const patternParts = pattern.split("/").filter(Boolean)
  const pathParts = path.split("/").filter(Boolean)
  if (patternParts.length !== pathParts.length) return null

  const params = {}
  for (let i = 0; i < patternParts.length; i++) {
    const p = patternParts[i]
    const actual = decodeURIComponent(pathParts[i])
    if (p.startsWith(":")) {
      params[p.slice(1)] = actual
    } else if (p !== actual) {
      return null
    }
  }
  return params
}

export function Link({ to, children, className, onClick, ...rest }) {
  const { navigate } = useRouter()
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
    if (onClick) onClick(e)
  }
  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
