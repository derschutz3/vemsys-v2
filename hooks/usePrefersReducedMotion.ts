import { useEffect, useMemo, useState } from "react"

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  const query = useMemo(() => {
    if (typeof window === "undefined") return null
    return window.matchMedia("(prefers-reduced-motion: reduce)")
  }, [])

  useEffect(() => {
    if (!query) return

    const set = () => setReduced(query.matches)
    set()

    query.addEventListener("change", set)
    return () => query.removeEventListener("change", set)
  }, [query])

  return reduced
}

