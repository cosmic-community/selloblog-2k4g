import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-subtle bg-paper/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">📝</span>
          <span className="font-serif text-xl font-bold tracking-tight">SelloBlog</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
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
      </div>
    </header>
  )
}