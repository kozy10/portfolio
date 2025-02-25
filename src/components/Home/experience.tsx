import Image from 'next/image'

import { Section } from './shared/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
interface Experience {
  role: string
  period: string
  details: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    role: 'Novel publishing platform',
    period: 'Mar - Aug 2024',
    details: [
      'Collaborated with project managers to prioritize development tasks, define specifications, and create project schedules, contributing to effective system design and project execution',
      'Mentored team members, conducted code reviews, and introduced the Scrum framework to facilitate the development process and enhance productivity',
      'Worked on reducing cloud usage costs, achieving about 30% reduction in annual expenses',
      "Led the development of implementing an AI-driven feature using OpenAI's API to automatically generate book tags, iteratively refining specifications and coordinating with the operations team to establish efficient workflows",
    ],
    technologies: ['Google Cloud'],
  },
  {
    role: 'Novel publishing platform',
    period: 'Mar 2023 - Aug 2024',
    details: [
      'Collaborated with project managers to prioritize development tasks, define specifications, and create project schedules, contributing to effective system design and project execution',
      'Mentored team members, conducted code reviews, and introduced the Scrum framework to facilitate the development process and enhance productivity',
      'Worked on reducing cloud usage costs, achieving about 30% reduction in annual expenses',
      "Led the development of implementing an AI-driven feature using OpenAI's API to automatically generate book tags, iteratively refining specifications and coordinating with the operations team to establish efficient workflows",
    ],
    technologies: ['Google Cloud'],
  },
  {
    role: 'Novel publishing platform',
    period: 'Mar 2023 - Aug 2024',
    details: [
      'Collaborated with project managers to prioritize development tasks, define specifications, and create project schedules, contributing to effective system design and project execution',
      'Mentored team members, conducted code reviews, and introduced the Scrum framework to facilitate the development process and enhance productivity',
      'Worked on reducing cloud usage costs, achieving about 30% reduction in annual expenses',
      "Led the development of implementing an AI-driven feature using OpenAI's API to automatically generate book tags, iteratively refining specifications and coordinating with the operations team to establish efficient workflows",
    ],
    technologies: ['Google Cloud'],
  },
]

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="w-full">
        <div className="flex gap-4">
          <div className="relative size-8">
            <Image src="/mediado.png" alt="MEDIA DO Co.,Ltd." fill />
          </div>
          <div className="flex w-full flex-col">
            <h3 className="text-xl font-semibold">MEDIA DO Co.,Ltd.</h3>
            <p className="mb-2 mt-1 text-sm text-neutral-600">{`Listed on the Tokyo Stock Exchange's Prime Market, holds the largest share of Japan's digital content distribution market`}</p>
          </div>
        </div>
        <div className="text-sm text-neutral-700">Projects at MediaDo</div>
        {experiences.map((exp, index) => (
          <div key={index} className="">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="flex justify-between">
                  <div className="flex w-full items-center justify-between pr-2">
                    <div className="text-base font-medium">{exp.role}</div>
                    <div className="text-neutral-600">{exp.period}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <ul className="list-disc space-y-3 pl-6">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-neutral-600">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </Section>
  )
}
