"use client"

import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#ai", label: "AI Skills" },
  { href: "#games", label: "Game Dev Experience" },
  { href: "#contact", label: "Contact" },
]

export function NavHeader() {
  const ids = NAV_LINKS.map((n) => n.href.replace("#", ""))
  const activeId = useActiveSection(ids)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground">
          {"<"}A.N.{"> /* AI • Game Dev */"}
        </Link>

        <ul className="flex items-center gap-2">
          {NAV_LINKS.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = activeId === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    "text-muted-foreground hover:text-foreground",
                    isActive && "text-primary",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-transparent transition-colors",
                      isActive && "bg-primary",
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
