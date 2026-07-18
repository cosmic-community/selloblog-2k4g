import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-subtle mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">📝</span>
          <span className="font-serif text-lg font-bold">SelloBlog</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/categories" className="hover:text-accent transition-colors">
            Categories
          </Link>
          <Link href="/authors" className="hover:text-accent transition-colors">
            Authors
          </Link>
        </nav>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} SelloBlog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}