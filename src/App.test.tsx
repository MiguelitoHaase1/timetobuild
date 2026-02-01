import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('Time to Build')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<App />)
    expect(screen.getByText(/AI Empowerment consulting/i)).toBeInTheDocument()
  })

  it('renders coming soon message', () => {
    render(<App />)
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })

  it('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Learn More/i })

    expect(button).toHaveTextContent('Learn More (0)')

    fireEvent.click(button)
    expect(button).toHaveTextContent('Learn More (1)')

    fireEvent.click(button)
    expect(button).toHaveTextContent('Learn More (2)')
  })
})
