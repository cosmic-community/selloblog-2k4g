import type { Post } from '@/types'
import PostCard from '@/components/PostCard'

interface PostGridProps {
  posts: Post[]
  emptyMessage?: string
}

export default function PostGrid({ posts, emptyMessage = 'No posts found.' }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-16 text-center text-muted">
        <p className="text-lg">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        if (!post || !post.id) return null
        return <PostCard key={post.id} post={post} />
      })}
    </div>
  )
}