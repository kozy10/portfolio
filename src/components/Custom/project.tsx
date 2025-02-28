import Image from 'next/image'
import Link from 'next/link'

import { Section } from './shared/section'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from 'lucide-react'

interface ProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  githubLink?: string
}

const projects: ProjectProps[] = [
  {
    title: 'Wordist',
    description: 'An AI-powered vocabulary app with visual learning',
    image: '/wordist_page.png',
    tags: ['Next.js App Router', 'Gemini', 'Workers AI'],
    link: 'https://wordist.net/discover',
  },
  {
    title: 'Portfolio',
    description: 'Self-hosted, fully open-source portfolio site',
    image: '/portfolio_screen.png',
    tags: ['Next.js', 'Payload CMS'],
    githubLink: 'https://github.com/kozy10/portfolio',
  },
]

function ProjectCard({ title, description, image, tags, link, githubLink }: ProjectProps) {
  return (
    <Card className="flex flex-col overflow-hidden md:flex-row rounded-2xl">
      <div className="flex w-3/5 flex-col justify-between p-6">
        <div>
          <CardHeader className="p-0">
            <h3 className="text-2xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="mt-2 p-0">
            <p className="text-foreground">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
        <CardFooter className="mt-6 p-0">
          {link && (
            <Link href={link} target="_blank">
              <Button variant="outline">Visit Website</Button>
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank">
              <Button variant="outline">
                <GithubIcon />
              </Button>
            </Link>
          )}
        </CardFooter>
      </div>
      <div className="flex w-2/5 justify-center bg-muted p-6">
        <div className="relative aspect-square w-full">
          <Image src={image} alt={title} fill className="rounded-xl object-contain shadow" />
        </div>
      </div>
    </Card>
  )
}

export function Project() {
  return (
    <Section title="Project">
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}
