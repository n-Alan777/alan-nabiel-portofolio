"use client"

import { useEffect, useState } from "react"

export function useActiveSection(ids: string[], options?: { rootMargin?: string; threshold?: number[] }) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most central visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? "-45% 0px -45% 0px",
        threshold: options?.threshold ?? [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [ids, options?.rootMargin, options?.threshold])

  return activeId
}
