import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks'
import { VideoBackground } from './VideoBackground'

interface VideoHeroProps {
  webmSrc: string
  mp4Src: string
  posterSrc: string
  fallbackSrc: string
  children: ReactNode
}

/**
 * VideoHero component with parallax, scale, and fade-out effects
 *
 * Features:
 * - Scroll-based parallax background movement
 * - Subtle scale effect on scroll
 * - Content fades out as user scrolls
 * - Cream overlay for brand alignment and text readability
 * - Respects prefers-reduced-motion
 */
export function VideoHero({ webmSrc, mp4Src, posterSrc, fallbackSrc, children }: VideoHeroProps) {
  const { containerRef, parallaxY, contentOpacity, scale } = useScrollProgress()

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with parallax and scale effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: prefersReducedMotion ? 0 : parallaxY,
          scale: prefersReducedMotion ? 1 : scale
        }}
      >
        <VideoBackground
          webmSrc={webmSrc}
          mp4Src={mp4Src}
          posterSrc={posterSrc}
          fallbackSrc={fallbackSrc}
        />
      </motion.div>

      {/* Cream overlay for brand alignment and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-cream/55 to-cream/65" />

      {/* Content with fade-out effect */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        style={{
          opacity: prefersReducedMotion ? 1 : contentOpacity
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}
