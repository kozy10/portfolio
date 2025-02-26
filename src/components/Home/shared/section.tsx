import { cn } from '@/utilities/ui'

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={cn('space-y-6', className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
