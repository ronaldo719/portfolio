import { SectionHeading } from "./section-heading"
import { Database, Server, Brain } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Distributed Systems",
    description:
      "Building and maintaining high-volume microservices in C#/.NET on AWS with a focus on reliability and cost optimization.",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Architecting resilient systems for transaction processing, retry mechanisms, and data optimization at scale.",
  },
  {
    icon: Brain,
    title: "AI/ML Exploration",
    description:
      "Expanding into Python and AI engineering, exploring the intersection of backend systems and machine learning.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="01."
          title="About Me"
        />

        <div className="mb-12 mx-auto max-w-3xl space-y-4 text-center leading-relaxed text-muted-foreground">
          <p>
            {
              "I'm a Software Engineer II at Mastercard, working on the backend of SessionM — our global loyalty platform that powers customer engagement for brands like McDonald's and Starbucks. With 2+ years of experience as a C#/.NET engineer, I build and maintain distributed microservices on AWS with a focus on system reliability and cost optimization."
            }
          </p>
          <p>
            Some recent highlights: architecting a retry and idempotency system
            for transaction processing, recovering ~$2M in loyalty points during
            a critical production incident, and cutting DynamoDB write costs by
            ~$30K/year through data optimization.
          </p>
          <p>
            Outside of work, I'm exploring the AI/ML space — building up my
            Python skills and working through an AI engineering learning path.
            I'm excited about where backend engineering and machine learning
            intersect, especially in high-volume, real-time systems.
          </p>
          <p>
            Always
            happy to connect with other engineers, swap ideas, or talk shop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
