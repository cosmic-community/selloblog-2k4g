// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export const revalidate = 60

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const email = getMetafieldValue(author.metadata?.email)
  const avatar = author.metadata?.avatar

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-subtle flex items-center justify-center flex-shrink-0">
          {avatar ? (
            <img
              src={`${avatar.imgix_url}?w=224&h=224&fit=crop&auto=format,compress`}
              alt={name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl">👤</span>
          )}
        </div>
        <div>
          <h1 className="font-serif text-4xl font-bold">{name}</h1>
          {bio && <p className="mt-3 text-muted max-w-2xl leading-relaxed">{bio}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
            >
              {email}
            </a>
          )}
        </div>
      </header>

      <h2 className="font-serif text-2xl font-bold mb-8">Stories by {name}</h2>
      <PostGrid posts={posts} emptyMessage="No stories published yet." />

      <div className="mt-12">
        <Link href="/authors" className="text-sm font-medium text-accent hover:underline">
          ← All authors
        </Link>
      </div>
    </div>
  )
}