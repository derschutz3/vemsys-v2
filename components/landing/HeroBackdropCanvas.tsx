import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { useEffect, useMemo, useRef } from "react"

type Point = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function HeroBackdropCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduced = usePrefersReducedMotion()

  const settings = useMemo(() => {
    return {
      points: 42,
      maxLink: 160,
      speed: 0.32,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1

    const pointer = { x: 0, y: 0, active: false }
    const points: Point[] = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const rand = (min: number, max: number) => min + Math.random() * (max - min)

    const init = () => {
      points.length = 0
      for (let i = 0; i < settings.points; i += 1) {
        points.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-settings.speed, settings.speed),
          vy: rand(-settings.speed, settings.speed),
          r: rand(1.2, 2.6),
        })
      }
    }

    const draw = (tick: number) => {
      ctx.clearRect(0, 0, width, height)

      const g = ctx.createRadialGradient(
        width * 0.68,
        height * 0.42,
        40,
        width * 0.56,
        height * 0.5,
        Math.max(width, height),
      )
      g.addColorStop(0, "rgba(0,110,255,0.26)")
      g.addColorStop(0.55, "rgba(0,38,130,0.10)")
      g.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      const base = { r: 0, g: 136, b: 255 }

      for (const p of points) {
        const px = pointer.active ? pointer.x : width * 0.52
        const py = pointer.active ? pointer.y : height * 0.46
        const dx = px - p.x
        const dy = py - p.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const pull = Math.min(1, 220 / dist)
        const ax = (dx / dist) * 0.012 * pull
        const ay = (dy / dist) * 0.012 * pull

        if (!reduced) {
          p.vx += ax
          p.vy += ay
          p.vx *= 0.98
          p.vy *= 0.98
          p.x += p.vx
          p.y += p.vy

          if (p.x < -20) p.x = width + 20
          if (p.x > width + 20) p.x = -20
          if (p.y < -20) p.y = height + 20
          if (p.y > height + 20) p.y = -20
        } else {
          p.x += Math.sin(tick / 1200 + p.r) * 0.02
          p.y += Math.cos(tick / 1100 + p.r) * 0.02
        }

        ctx.beginPath()
        ctx.fillStyle = `rgba(${base.r},${base.g},${base.b},0.58)`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > settings.maxLink) continue
          const alpha = Math.max(0, 1 - dist / settings.maxLink) * 0.35
          ctx.strokeStyle = `rgba(${base.r},${base.g},${base.b},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      const sweep = ctx.createLinearGradient(0, 0, width, 0)
      const t = ((tick / 2800) % 1 + 1) % 1
      const a1 = Math.max(0, t - 0.18)
      const a2 = Math.min(1, t + 0.18)
      sweep.addColorStop(0, "rgba(255,255,255,0)")
      sweep.addColorStop(a1, "rgba(255,255,255,0)")
      sweep.addColorStop(t, "rgba(255,255,255,0.18)")
      sweep.addColorStop(a2, "rgba(255,255,255,0)")
      sweep.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = sweep
      ctx.fillRect(0, 0, width, height)
    }

    const loop = (t: number) => {
      frame += 1
      draw(t)
      if (!reduced) raf = window.requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }

    const onLeave = () => {
      pointer.active = false
    }

    resize()
    init()
    draw(0)

    if (!reduced) raf = window.requestAnimationFrame(loop)

    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerleave", onLeave)
      window.cancelAnimationFrame(raf)
    }
  }, [reduced, settings.maxLink, settings.points, settings.speed])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

