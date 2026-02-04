import { useState, useEffect } from 'react'

export function Opening() {
  const [showSubtitle, setShowSubtitle] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle desaturation and sepia for brand alignment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/before.jpeg)',
          backgroundPosition: 'center center',
          filter: 'grayscale(0.3) sepia(0.2) brightness(0.9)',
        }}
      />

      {/* Cream overlay for brand alignment and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-cream/55 to-cream/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-text-primary leading-tight">
            Do your AI tools empower your employees?
          </h1>

          {/* Mobile: Show after 3 seconds */}
          <p
            className={`md:hidden text-2xl sm:text-3xl font-serif text-text-primary leading-tight mt-6 transition-opacity duration-1000 ${
              showSubtitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ... or take away their superpowers?
          </p>

          {/* Desktop: Show after 3 seconds */}
          <p
            className={`hidden md:block text-3xl lg:text-4xl font-serif text-text-primary leading-tight mt-6 transition-opacity duration-1000 ${
              showSubtitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ... or take away their superpowers?
          </p>
        </div>
      </div>
    </section>
  )
}
