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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest thoughts, tutorials, and insights on web development, design, and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={article.heroImage.url}
                  alt={article.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 line-clamp-3">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/posts/${article.slug}`} passHref>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/posts" passHref>
            <Button variant="default">View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
