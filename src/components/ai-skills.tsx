import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SKILLS = [
  "Python",
  "CNNs",
  "Transformers",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "NLP",
  "MLOps",
  "Data Pipelines",
]

const PROJECTS = [
  { title: "Image Classification (CNN)", desc: "Training pipeline with augmentations and evaluation." },
  { title: "NLP Intent Classifier", desc: "Transformer fine-tuning for illegal content detection (Judi Online)." },
  { title: "Automatic License Plate Recognition (ALPR)", desc: "Object detection (YOLO) and OCR for real-time license plate extraction." },
  { title: "Fuzzy Logic Traffic Optimizer", desc: "Simulasi traffic light adaptif menggunakan Fuzzy Logic dalam lingkungan SUMO." },
]

export function AISkills() {
  return (
    <section id="ai" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">AI &amp; Data Proficiency</h2>

      <div className="mb-10 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-primary/30 bg-transparent px-3 py-1 text-xs text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
