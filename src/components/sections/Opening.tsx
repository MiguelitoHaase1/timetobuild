import { useState, useEffect } from 'react'

export function Opening() {
  const [scrolled, setScrolled] = useState(false)
  const [showDesktopText, setShowDesktopText] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesktopText(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with blur and desaturation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/before.jpeg)',
          backgroundPosition: 'center center',
          filter: 'blur(3px) saturate(0.7)',
          transform: 'scale(1.05)', // Compensate for blur edges
        }}
      />

      {/* Overlay for professional look aligned with brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/50 to-cream/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary leading-tight drop-shadow-lg">
            Does your AI tools empower your employees?
          </h1>

          {/* Mobile: Show on scroll */}
          <p
            className={`md:hidden text-3xl sm:text-4xl font-serif font-bold text-text-primary leading-tight drop-shadow-lg mt-6 transition-all duration-500 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            ... or take away their superpowers?
          </p>

          {/* Desktop: Show after 5 seconds */}
          <p
            className={`hidden md:block text-5xl lg:text-6xl font-serif font-bold text-text-primary leading-tight drop-shadow-lg mt-6 transition-opacity duration-1000 ${
              showDesktopText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ... or take away their superpowers?
          </p>
        </div>
      </div>
    </section>
  )
}
