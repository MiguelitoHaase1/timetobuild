import { Card } from './Card'

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  className = '',
}: TestimonialCardProps) {
  return (
    <Card className={className}>
      <blockquote className="mb-4">
        <p className="text-text-primary italic">"{quote}"</p>
      </blockquote>
      <div className="text-small">
        <p className="font-semibold text-text-primary">{author}</p>
        {role && <p className="text-text-muted">{role}</p>}
      </div>
    </Card>
  )
}
