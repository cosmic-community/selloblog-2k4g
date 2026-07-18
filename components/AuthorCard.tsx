import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="group block rounded-2xl border border-subtle bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mx-auto w-20 h-20 rounded-full overflow-hidden bg-subtle flex items-center justify-center">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl">👤</span>
        )}
      </div>
      <h3 className="mt-4 font-serif text-lg font-bold group-hover:text-accent transition-colors">
        {name}
      </h3>
      {bio && <p className="mt-2 text-sm text-muted line-clamp-3">{bio}</p>}
    </Link>
  )
}