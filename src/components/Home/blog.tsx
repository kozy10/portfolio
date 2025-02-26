import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Section } from './shared/section'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '../Media'

// Mock data for featured articles
// In a real application, this would come from an API or CMS
const featuredArticles = [
  {
    id: 1,
    title: 'W',
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

export default async function Blog() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
    },
  })
  return (
    <Section title="Article">
      <div className="space-y-8">
        <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
          {posts.docs.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              className="block transform transition-all duration-300 hover:scale-[1.02]"
            >
              <Card className="flex flex-row hover:shadow-sm transition-shadow duration-300 cursor-pointer border-2 border-transparent bg-neutral-100">
                <div className="p-6">
                  <div className="relative h-40 w-40 sm:w-48 flex-shrink-0 overflow-hidden">
                    {/* <Image
                      src={post.meta?.image}
                      alt={article.heroImage.alt}
                      fill
                      className="object-cover"
                    /> */}
                    <Media resource={post.meta?.image} />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {format(new Date(post.publishedAt || ''), 'MMMM d, yyyy')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-2">{post.meta?.description}</p>
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
