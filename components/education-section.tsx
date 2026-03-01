import { SectionHeading } from "./section-heading"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.S. in Computer Science",
    school: "University of California, San Diego",
    period: "2020 — 2023",
    details:
      "Relevant coursework in algorithms, data structures, cybersecurity, machine learning, operating systems, and software engineering.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="02."
          title="Education"
          description="Academic foundations that shaped my engineering mindset."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-card-foreground">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-primary">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  {edu.school}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
