// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getMetafieldValue, getTags } from '@/lib/cosmic'
import TagList from '@/components/TagList'

export const revalidate = 60

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const tags = getTags(post.metadata?.tags)

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>

        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="mt-6 inline-flex items-center gap-3 group"
          >
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-subtle flex items-center justify-center">
                👤
              </div>
            )}
            <div>
              <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </p>
              <p className="text-xs text-muted">
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </Link>
        )}
      </div>

      {featuredImage && (
        <div className="mb-10 overflow-hidden rounded-3xl bg-subtle">
          <img
            src={`${featuredImage.imgix_url}?w=1400&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={700}
            height={450}
            className="w-full object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-subtle">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Tags</h3>
          <TagList tags={tags} />
        </div>
      )}

      <div className="mt-12">
        <Link href="/" className="text-sm font-medium text-accent hover:underline">
          ← Back to all stories
        </Link>
      </div>
    </article>
  )
}