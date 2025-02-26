import Image from 'next/image'
import { Section } from './shared/section'

export function About() {
  return (
    <Section title="About">
      <div className="flex gap-4">
        <div className="space-y-4 text-neutral-600">
          <p>
            Full-Stack Engineer with 5 years of experience specializing in TypeScript, Next.js, Go,
            and AWS. Led a 6-member team, managing end-to-end development—from architecture to
            release—on scalable services maintained for over 3 years. Eager to collaborate with
            cross-functional teams to drive business success.
          </p>
        </div>
        <div className="relative aspect-square w-full">
          <Image
            src="/profile_image.png"
            alt="Profile"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
