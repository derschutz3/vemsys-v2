import { useEffect } from "react"

export function useMagnetic() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"))
    if (!els.length) return

    const cleanups: Array<() => void> = []

    for (const el of els) {
      const target = el
      const strength = Number(target.getAttribute("data-strength") ?? 10)

      const onMove = (e: PointerEvent) => {
        const rect = target.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const max = Math.max(rect.width, rect.height)
        const rx = (dx / max) * strength
        const ry = (dy / max) * strength
        target.style.setProperty("--mx", `${rx}px`)
        target.style.setProperty("--my", `${ry}px`)
        target.classList.add("is-magnet")
      }

      const onLeave = () => {
        target.classList.remove("is-magnet")
        target.style.setProperty("--mx", `0px`)
        target.style.setProperty("--my", `0px`)
      }

      target.addEventListener("pointermove", onMove)
      target.addEventListener("pointerleave", onLeave)
      cleanups.push(() => {
        target.removeEventListener("pointermove", onMove)
        target.removeEventListener("pointerleave", onLeave)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])
}

