import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[160px_1fr]">
        <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-border md:h-44 md:w-44">
          <Image
            src="/media/a.png"
            alt="Alan Nabiel professional avatars"
            fill
            className="object-cover"
            sizes="485px"
            priority
          />
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">About Me</h2>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            Mahasiswa Semester 5 Computer Science (AI) BINUS, berfokus pada Deep Learning, Computer Vision, dan MLOps. Menguasai implementasi AI, didukung pengalaman sebagai Lead Developer Game Server yang sukses merancang dan mengelola infrastruktur game berskala masif.
          </p>
        </div>
      </div>
    </section>
  )
}
