import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ShowcaseItem = {
  title: string
  description: string
  mediaPosterQuery: string
  videoSrc?: string
  stats: { label: string }[]
}

const SHOWCASE: ShowcaseItem[] = [
  {
    title: "Minecraft Server — Project Management & Scalability",
    description: "Memimpin pengembangan end-to-end server Minecraft selama 7 tahun, dari initial concept hingga operasional masif dengan fokus pada komunitas, monetisasi, dan efisiensi infrastruktur.",
    mediaPosterQuery: "minecraft%20gameplay%20server%20screenshot",
    videoSrc: '/media/minecraft.mp4',
    stats: [{ label: "500.000+ Unique Users" }, { label: "Peak CCU 2.000~" }],
  },
  {
    title: "Roblox Game Development & User Engagement",
    description: "Merancang dan mengembangkan pengalaman game sosial yang sangat menarik (high engagement), mampu menangani concurrent user dan visits skala masif.",
    mediaPosterQuery: "roblox%20gameplay%20server%20screenshot",
    videoSrc: '/media/roblox.mp4',
    stats: [{ label: "5.000.000+ Visits" }, { label: "Peak CCU 10.000+" }],
  },
]

function MediaSlot({ posterQuery, src }: { posterQuery: string; src?: string }) {
  const poster = `/placeholder.svg?height=560&width=960&query=${posterQuery}`
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-card">
      {src ? (
        <video className="h-full w-full object-cover" src={src} autoPlay muted loop playsInline poster={poster} />
      ) : (
        <img
          src={poster || "/placeholder.svg"}
          alt="Gameplay media placeholder"
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 ring-0" />
    </div>
  )
}

export function GameShowcase() {
  return (
    <section id="games" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">Game Development: Building &amp; Scaling Communities</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SHOWCASE.map((item) => (
          <Card key={item.title} className="bg-card">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MediaSlot posterQuery={item.mediaPosterQuery} src={item.videoSrc} />
              <p className="text-muted-foreground">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.stats.map((s) => (
                  <span
                    key={s.label}
                    className="rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
