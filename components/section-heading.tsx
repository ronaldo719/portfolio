interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-10">
      <p className="mb-2 font-mono text-sm text-primary">{label}</p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
