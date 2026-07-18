import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-2xl border border-subtle bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">🏷️</span>
        <h3 className="font-serif text-xl font-bold group-hover:text-accent transition-colors">
          {name}
        </h3>
      </div>
      {description && <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>}
    </Link>
  )
}