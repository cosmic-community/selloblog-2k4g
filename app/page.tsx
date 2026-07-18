import { getAllPosts } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import PostGrid from '@/components/PostGrid'
import type { Post } from '@/types'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getAllPosts()

  const featured: Post | undefined = posts[0]
  const rest: Post[] = posts.slice(1)

  return (
    <div>
      {featured ? (
        <Hero post={featured} />
      ) : (
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
          <h1 className="font-serif text-5xl font-bold">Welcome to SelloBlog</h1>
          <p className="mt-4 text-muted text-lg">A creative portfolio blog. No posts yet.</p>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold">Latest Stories</h2>
        </div>
        <PostGrid posts={rest} emptyMessage="More stories coming soon." />
      </section>
    </div>
  )
}