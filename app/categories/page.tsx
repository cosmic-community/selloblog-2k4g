import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const revalidate = 60

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold">Categories</h1>
        <p className="mt-3 text-muted">Explore stories by topic.</p>
      </header>

      {categories.length === 0 ? (
        <div className="py-16 text-center text-muted">
          <p className="text-lg">No categories found.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            if (!category || !category.id) return null
            return <CategoryCard key={category.id} category={category} />
          })}
        </div>
      )}
    </div>
  )
}