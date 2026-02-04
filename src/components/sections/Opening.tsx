import { useState, useEffect } from 'react'

export function Opening() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/before.jpeg)',
          backgroundPosition: 'center center',
        }}
      />

      {/* Subtle overlay for text readability while keeping image visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            Does your AI tools empower your employees?
          </h1>

          {/* Mobile: Show on scroll */}
          <p
            className={`md:hidden text-3xl sm:text-4xl font-serif font-bold text-white leading-tight drop-shadow-2xl mt-6 transition-all duration-500 ${
              scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            ... or take away their superpowers?
          </p>

          {/* Desktop: Blinking effect */}
          <p className="hidden md:block text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-2xl mt-6 animate-blink">
            ... or take away their superpowers?
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 33.33% {
            opacity: 1;
          }
          33.34%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </section>
  )
}
