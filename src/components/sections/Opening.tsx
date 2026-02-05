import { useState, useEffect } from 'react'
import { useSectionTracking } from '@/hooks'
import { VideoHero } from '@/components/video'

export function Opening() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const sectionRef = useSectionTracking('opening') as React.RefObject<HTMLDivElement>

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={sectionRef}>
      <VideoHero
        webmSrc="/videos/before-hero.webm"
        mp4Src="/videos/before-hero.mp4"
        posterSrc="/videos/before-hero-poster.jpg"
        fallbackSrc="/before.jpeg"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-text-primary leading-tight">
            Do your AI tools empower your employees?
          </h1>

          {/* Mobile: Show after 1 second */}
          <p
            className={`md:hidden text-2xl sm:text-3xl font-serif text-text-primary leading-tight mt-6 transition-opacity duration-1000 ${
              showSubtitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ... or take away their superpowers?
          </p>

          {/* Desktop: Show after 1 second */}
          <p
            className={`hidden md:block text-3xl lg:text-4xl font-serif text-text-primary leading-tight mt-6 transition-opacity duration-1000 ${
              showSubtitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ... or take away their superpowers?
          </p>
        </div>
      </VideoHero>
    </div>
  )
}
