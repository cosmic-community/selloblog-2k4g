// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export const revalidate = 60

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Category</span>
        <h1 className="mt-2 font-serif text-4xl font-bold">{name}</h1>
        {description && <p className="mt-3 text-muted max-w-2xl">{description}</p>}
      </header>

      <PostGrid posts={posts} emptyMessage="No posts in this category yet." />

      <div className="mt-12">
        <Link href="/categories" className="text-sm font-medium text-accent hover:underline">
          ← All categories
        </Link>
      </div>
    </div>
  )
}