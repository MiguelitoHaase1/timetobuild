interface QuoteProps {
  quote: string
  author: string
  role: string
  source?: string
  className?: string
}

export function Quote({ quote, author, role, source, className = '' }: QuoteProps) {
  return (
    <div className={`bg-cream-panel border-l-4 border-coral rounded-lg p-6 ${className}`}>
      <blockquote className="text-base text-text-primary leading-relaxed mb-3 italic">
        "{quote}"
      </blockquote>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-semibold text-text-primary">{author}</div>
        <div className="text-xs text-text-muted">
          {role}
          {source && <span> • {source}</span>}
        </div>
      </div>
    </div>
  )
}
