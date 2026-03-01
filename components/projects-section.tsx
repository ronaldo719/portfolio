import { SectionHeading } from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Mary's Hair Cuts",
    description:
      "Designed and built a webapp for Mary's Hair Cuts. Implemented i18next for Spanish/English bilingual support and integrated EmailJS APIs for contact form emails.",
    tech: ["React", "i18next", "EmailJS", "JavaScript"],
    github: "https://github.com/ronaldo719/marySalon-website",
    live: "https://maryswebsite.netlify.app/",
  },
  {
    title: "ZooSeeker Android App",
    description:
      "Android app that computes the optimal route to visit desired exhibits at the San Diego Zoo with minimal walking. Implemented the exhibits database with RoomDatabase and built unit, integration, and system tests.",
    tech: ["Java", "Android", "RoomDatabase", "JUnit", "Espresso", "Robolectric"],
    github: "https://github.com/CSE-110-Spring-2022/zooseeker-cse-110-team-65",
    live: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="04."
          title="Projects"
          description="A selection of things I've built and shipped."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4.5 w-4.5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
