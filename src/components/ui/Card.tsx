import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  const classes = `card ${className}`.trim()

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
