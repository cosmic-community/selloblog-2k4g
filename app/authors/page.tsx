import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const revalidate = 60

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold">Authors</h1>
        <p className="mt-3 text-muted">Meet the creative minds behind the stories.</p>
      </header>

      {authors.length === 0 ? (
        <div className="py-16 text-center text-muted">
          <p className="text-lg">No authors found.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => {
            if (!author || !author.id) return null
            return <AuthorCard key={author.id} author={author} />
          })}
        </div>
      )}
    </div>
  )
}