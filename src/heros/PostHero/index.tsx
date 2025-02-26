import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="container">
      <div className="flex flex-col  max-w-[48rem] mx-auto">
        <div className="z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] pb-8">
          <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
            <div className="uppercase text-sm mb-6">
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <React.Fragment key={index}>
                      {titleToUse}
                      {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>

            <h1 className="mb-6 text-3xl md:text-4xl font-semibold">{title}</h1>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              {hasAuthors && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">Author</p>

                    <p>{formatAuthors(populatedAuthors)}</p>
                  </div>
                </div>
              )}
              {publishedAt && (
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Date Published</p>

                  <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative aspect-video">
          {heroImage && typeof heroImage !== 'string' && (
            <Media fill priority imgClassName="object-cover rounded-lg" resource={heroImage} />
          )}
        </div>
      </div>
    </div>
  )
}
