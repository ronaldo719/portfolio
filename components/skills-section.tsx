import { SectionHeading } from "./section-heading"

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: ["C#", "Java", "Python", "JavaScript", "HTML", "C++", "C", "SQL", "React.js", "Node.js", ".NET"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS CloudWatch", "DynamoDB", "SQS", "Athena", "ECS", "RDS", "Docker", "LocalStack"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "DynamoDB"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitLab", "Postman", "Visual Studio", "Jira", "PagerDuty", "SignalFX"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="05."
          title="Technical Skills"
          description="Technologies and tools I work with daily."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
