import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/ronaldo719", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldogarcia7/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ronaldogarcia7077@gmail.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 pt-20 md:flex-row md:gap-16">
        {/* Headshot */}
        <div className="relative shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border md:h-64 md:w-64">
            <Image
              src="/images/ronaldoheadshot.jpeg"
              alt="Portrait of Ronaldo Garcia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <p className="mb-2 font-mono text-sm text-primary">
            {"Hello, I'm"}
          </p>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Ronaldo Garcia</span>
          </h1>
          <h2 className="mb-6 text-xl font-medium text-muted-foreground md:text-2xl">
            Software Engineer II at Mastercard
          </h2>
          <p className="mb-8 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            I build distributed backend systems that power global loyalty
            platforms. Focused on reliability, performance, and cost
            optimization in high-volume production environments.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 md:justify-start">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="/myResume.docx"
              download
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 animate-bounce text-primary" />
      </a>
    </section>
  )
}
