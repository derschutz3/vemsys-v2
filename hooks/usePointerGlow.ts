import { useEffect } from "react"

export function usePointerGlow() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--px", `${e.clientX}px`)
      document.documentElement.style.setProperty("--py", `${e.clientY}px`)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])
}

