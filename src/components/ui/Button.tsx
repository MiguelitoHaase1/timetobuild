import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const classes = `${variantClass} ${className}`.trim()

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
