import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
  className?: string
}

export default function PostCard({ post, className = '' }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article
      className={`group rounded-2xl overflow-hidden bg-white border border-subtle transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-subtle">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">📝</div>
          )}
        </div>
      </Link>
      <div className="p-6">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h3 className="mt-2 font-serif text-xl font-bold leading-snug">
          <Link href={`/posts/${post.slug}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        </h3>
        {author && (
          <div className="mt-4 flex items-center gap-3">
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-subtle flex items-center justify-center text-sm">
                👤
              </div>
            )}
            <span className="text-sm text-muted">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}