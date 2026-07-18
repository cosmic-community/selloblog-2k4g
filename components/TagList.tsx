interface TagListProps {
  tags: string[]
}

export default function TagList({ tags }: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="inline-block rounded-full bg-subtle px-3 py-1 text-xs font-medium text-muted"
        >
          #{tag}
        </span>
      ))}
    </div>
  )
}