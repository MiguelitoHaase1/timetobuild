import { useState, useEffect } from 'react'
import { useSectionTracking } from '@/hooks'
import { ScrollSequence } from '@/components/scroll'

export function Opening() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const sectionRef = useSectionTracking('opening')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const videoConfig = {
    webmSrc: '/videos/before-hero.webm',
    mp4Src: '/videos/before-hero.mp4',
    posterSrc: '/videos/before-hero-poster.jpg',
    fallbackSrc: '/before.jpeg',
  }

  const openingContent = (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="flex items-center justify-center min-h-screen px-6"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight drop-shadow-lg">
          Do your AI tools empower your employees?
        </h1>

        {/* Mobile: Show after 1 second */}
        <p
          className={`md:hidden text-2xl sm:text-3xl font-serif text-white leading-tight mt-6 drop-shadow-lg transition-opacity duration-1000 ${
            showSubtitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ... or take away their superpowers?
        </p>

        {/* Desktop: Show after 1 second */}
        <p
          className={`hidden md:block text-3xl lg:text-4xl font-serif text-white leading-tight mt-6 drop-shadow-lg transition-opacity duration-1000 ${
            showSubtitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ... or take away their superpowers?
        </p>
      </div>
    </div>
  )

  return (
    <ScrollSequence
      videoConfig={videoConfig}
      openingContent={openingContent}
    />
  )
}
