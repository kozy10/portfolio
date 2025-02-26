import Image from 'next/image'
import Link from 'next/link'

import { Section } from './shared/section'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

const projects: ProjectProps[] = [
  {
    title: 'Wordist',
    description:
      'An AI-powered English vocabulary learning service that brings words to life with vivid imagery, making them more memorable',
    image: '/wordist_page.png',
    tags: ['Next.js'],
    link: 'https://wordist.example.com',
  },
  // Add more projects here as needed
]

function ProjectCard({ title, description, image, tags, link }: ProjectProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-none md:flex-row rounded-2xl">
      <div className="flex w-1/2 flex-col justify-between p-6">
        <div>
          <CardHeader className="p-0">
            <h3 className="text-2xl font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="mt-4 p-0">
            <p className="text-neutral-600">{description}</p>
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
        </CardFooter>
      </div>
      <div className="flex w-1/2 justify-center bg-neutral-100 p-6">
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
