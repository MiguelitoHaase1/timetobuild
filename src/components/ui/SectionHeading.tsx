import { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  level?: 1 | 2
  centered?: boolean
  className?: string
}

export function SectionHeading({
  children,
  level = 2,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  const centeredClass = centered ? 'text-center' : ''
  const classes = `${centeredClass} ${className}`.trim()

  if (level === 1) {
    return <h1 className={classes}>{children}</h1>
  }

  return <h2 className={classes}>{children}</h2>
}
