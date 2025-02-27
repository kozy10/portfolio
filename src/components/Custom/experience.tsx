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
    period: 'Mar 2023 - Aug 2024',
    details: [
      'Collaborated with project managers to prioritize development tasks, define specifications, and create project schedules, contributing to effective system design and project execution',
      'Mentored team members, conducted code reviews, and introduced the Scrum framework to facilitate the development process and enhance productivity',
      'Worked on reducing cloud usage costs, achieving about 30% reduction in annual expenses',
      "Led the development of implementing an AI-driven feature using OpenAI's API to automatically generate book tags, iteratively refining specifications and coordinating with the operations team to establish efficient workflows",
    ],
    technologies: ['Google Cloud', 'Vue.js', 'Ruby on Rails', 'Loocker'],
  },
  {
    role: 'NFT platform',
    period: 'Aug 2021 - Feb 2023',
    details: [
      'Automated depositing funds to users via bank transfer by integrating a payment provider, reducing operational costs',
      'Implemented several features to integrate a web application with blockchain technology, including the development of a worker process to detect unauthorized NFT transactions occurring outside the platform',
      "Led the development of implementing an AI-driven feature using OpenAI's API to automatically generate book tags, iteratively refining specifications and coordinating with the operations team to establish efficient workflows",
    ],
    technologies: ['Next.js', 'Go', 'MySQL', 'DynamoDB', 'AWS SAM', 'Blochain', 'Flow', 'Blocto'],
  },
  {
    role: 'eBook store',
    period: 'Aug 2019 - Jul 2021',
    details: [
      'Contributed to the end-to-end renewal of an eBook store, rebuilding it from scratch by modernizing the language, framework, and design',
      'Successfully migrated about 1 million user account and 20 million book records with zero incidents',
      'Implemented serverless batch processing capable of updating more than 10,000 book records per hour',
      'Developed login functionality using authentication providers such as Apple, and implemented full-text search functionality using Algolia',
    ],
    technologies: [
      'Angular',
      'Go',
      'GraphQL',
      'PostgreSQL',
      'Redis',
      'Terraform',
      'Algolia',
      'Sign in with Apple',
    ],
  },
]

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src="/mediado.png" alt="MEDIA DO Co.,Ltd." width={32} height={32} />
            <h3 className="text-xl font-semibold">MEDIA DO Co.,Ltd.</h3>
          </div>
          <p className="mb-2 mt-1 text-sm text-neutral-600">{`Listed on the Tokyo Stock Exchange's Prime Market, holds the largest share of Japan's digital content distribution market`}</p>
        </div>
        {experiences.map((exp, index) => (
          <div key={index}>
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
                    <div className="mt-4 flex flex-wrap gap-2">
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
