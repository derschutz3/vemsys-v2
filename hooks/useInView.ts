import { RefObject, useEffect, useState } from "react"

type Options = {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: Options = {},
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const next = entries.some((e) => e.isIntersecting)
        setInView((prev) => {
          if (options.once && prev) return prev
          return next
        })
      },
      {
        root: null,
        rootMargin: options.rootMargin ?? "0px",
        threshold: options.threshold ?? 0.15,
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.once, options.rootMargin, options.threshold, ref])

  return inView
}

