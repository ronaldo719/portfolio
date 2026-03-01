import { SectionHeading } from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer II",
    company: "Mastercard (SessionM)",
    companyUrl: "https://www.mastercard.us",
    period: "August 2023 — Present",
    bullets: [
      "Investigated and optimized a client DynamoDB table 22.5x larger than the next largest, engineering a field removal solution that reduced write costs by ~$30K/year.",
      "Led impact analysis and recovery during a critical production incident affecting $2M USD in loyalty points, identifying 74,500 impacted users, extending an internal replay tool with new functionality, and reprocessing all transactions within 24 hours.",
      "Architected a comprehensive retry and idempotency system for transaction outcome processing, introducing error classification via an IRetryable interface, refactoring offer processing to isolate failures per outcome, and implementing deterministic UUID-based idempotency to prevent duplicate processing across retries.",
      "Built a local integration testing environment using Docker Compose (MSSQL, LocalStack), adopted by 5–10 engineers, with published images and an onboarding runbook.",
    ],
    tech: ["C#", ".NET", "DynamoDB", "AWS", "Docker", "SQL Server"],
  },
  {
    role: "Research Mentee",
    company: "UC San Diego Early Research Scholars Program",
    companyUrl: "https://ucsd.edu",
    period: "September 2020 — June 2021",
    bullets: [
      "Worked on a research project analyzing the difficulties of non-native speakers in computer science.",
      "Developed Python solutions to interview questions given to UCSD participants during the research process.",
      "Results highlighted the need for more beginner-friendly official documentation and rethinking think-aloud interview methods.",
      "Assessed and presented quantitative and qualitative analysis.",
    ],
    tech: ["Python", "Research", "Data Analysis"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="03."
          title="Experience"
          description="Where I've worked and what I've built."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="group relative flex gap-6"
            >
              {/* Timeline */}
              <div className="hidden flex-col items-center md:flex">
                <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <div className="w-px flex-1 bg-border" />
              </div>

              <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-semibold text-card-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-muted-foreground">{"·"}</span>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mb-3 font-mono text-xs text-muted-foreground">
                  {exp.period}
                </p>
                <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground list-disc list-outside pl-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-md font-mono text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
