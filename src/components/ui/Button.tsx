import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'large'
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const sizeClass = size === 'large' ? 'text-lg px-8 py-4' : ''
  const classes = `${variantClass} ${sizeClass} ${className}`.trim()

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  )
}
