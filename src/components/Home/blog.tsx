import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Section } from './shared/section'

// Mock data for featured articles
// In a real application, this would come from an API or CMS
const featuredArticles = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    description: 'Learn how to build modern web applications with Next.js, React, and TypeScript.',
    publishedAt: '2023-05-15T09:00:00Z',
    heroImage: {
      url: '/wordist_page.png',
      alt: 'Code editor showing Next.js code',
    },
  },
  {
    id: 2,
    title: 'Building a Portfolio with Payload CMS',
    slug: 'building-portfolio-with-payload-cms',
    description:
      'A comprehensive guide to creating a professional portfolio website using Payload CMS and Next.js.',
    publishedAt: '2023-06-22T14:30:00Z',
    heroImage: {
      url: '/wordist_page.png',
      alt: 'Portfolio website on multiple devices',
    },
  },
  {
    id: 3,
    title: 'Mastering TypeScript for React Development',
    slug: 'mastering-typescript-for-react-development',
    description: 'Tips and tricks for using TypeScript effectively in your React applications.',
    publishedAt: '2023-07-10T11:15:00Z',
    heroImage: {
      url: '/wordist_page.png',
      alt: 'TypeScript code on a computer screen',
    },
  },
]

const Blog: React.FC = () => {
  return (
    <Section title="Article">
      <div className="space-y-8">
        <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
          {featuredArticles.map((article) => (
            <Link
              href={`/posts/${article.slug}`}
              key={article.id}
              className="block transform transition-all duration-300 hover:scale-[1.02]"
            >
              <Card className="flex flex-row hover:shadow-sm transition-shadow duration-300 cursor-pointer border-2 border-transparent bg-neutral-100">
                <div className="p-6">
                  <div className="relative h-40 w-40 sm:w-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={article.heroImage.url}
                      alt={article.heroImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-2">{article.description}</p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="">
          <Link href="/posts" passHref>
            <Button variant="outline">View All Articles</Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Blog
