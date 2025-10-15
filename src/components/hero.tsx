import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-start gap-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {"// AI • Game Development"}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Alan Nabiel</h1>
        <p className="text-pretty max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          AI Engineer &amp; Game Developer — Blending Data Science and Creative Worlds.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#ai">
            <Button className="bg-primary text-primary-foreground hover:opacity-90">Lihat Proyek AI</Button>
          </a>
          <a href="#games">
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Lihat Pengalaman Game Dev
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
