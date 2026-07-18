import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  post: Post
}

export default function Hero({ post }: HeroProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
      <Link href={`/posts/${post.slug}`} className="group block">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-subtle order-1 lg:order-2">
            {featuredImage ? (
              <img
                src={`${featuredImage.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                alt={title}
                width={600}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">📝</div>
            )}
          </div>
          <div className="order-2 lg:order-1">
            {category && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                {getMetafieldValue(category.metadata?.name) || category.title}
              </span>
            )}
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold leading-tight group-hover:text-accent transition-colors">
              {title}
            </h1>
            {author && (
              <div className="mt-6 flex items-center gap-3">
                {author.metadata?.avatar ? (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={getMetafieldValue(author.metadata?.name) || author.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center">
                    👤
                  </div>
                )}
                <span className="text-sm font-medium text-muted">
                  By {getMetafieldValue(author.metadata?.name) || author.title}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </section>
  )
}