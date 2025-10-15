import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Alan Nabiel</p>
        <nav aria-label="Social" className="flex items-center gap-4">
          <Link
            href="mailto:alan.nabiel@binus.ac.id"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Mail size={18} aria-hidden />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alan-nabiel-249251386/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={18} aria-hidden />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/n-Alan777"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Github size={18} aria-hidden />
            <span className="sr-only">GitHub</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
