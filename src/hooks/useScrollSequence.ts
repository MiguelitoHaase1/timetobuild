import { useRef, useEffect, useState } from 'react'
import { useScroll, useTransform, MotionValue, motionValue } from 'framer-motion'

export interface ScrollSequenceValues {
  containerRef: React.RefObject<HTMLElement>
  // Phase 1: Hero fade (0-30%)
  heroOpacity: MotionValue<number>
  heroY: MotionValue<number>
  // Phase 2: Video shrink (30-60%)
  videoScale: MotionValue<number>
  videoBorderRadius: MotionValue<number>
  // Phase 3: Title rise (60-100%)
  nextSectionOpacity: MotionValue<number>
  nextSectionY: MotionValue<number>
  // Accessibility
  isReducedMotion: boolean
}

/**
 * Hook that provides scroll-based animation values for a 3-phase scroll sequence
 *
 * Phase 1 (0-30%): Hero text fades out and moves up
 * Phase 2 (30-60%): Video shrinks and gains border-radius
 * Phase 3 (60-100%): Next section title rises and fades in
 *
 * @returns Object containing motion values for scroll-based animations
 */
export function useScrollSequence(): ScrollSequenceValues {
  const containerRef = useRef<HTMLElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Set up scroll tracking (always call hooks in same order)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Phase 1: Hero fade (0-30%)
  const heroOpacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroYTransform = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  // Phase 2: Video shrink (30-60%)
  const videoScaleTransform = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.65])
  const videoBorderRadiusTransform = useTransform(scrollYProgress, [0.3, 0.6], [0, 24])

  // Phase 3: Title rise (60-100%)
  const nextSectionOpacityTransform = useTransform(scrollYProgress, [0.6, 0.9], [0, 1])
  const nextSectionYTransform = useTransform(scrollYProgress, [0.6, 1.0], [100, 0])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // If reduced motion is enabled, return static values
  const heroOpacity = isReducedMotion ? motionValue(1) : heroOpacityTransform
  const heroY = isReducedMotion ? motionValue(0) : heroYTransform
  const videoScale = isReducedMotion ? motionValue(1) : videoScaleTransform
  const videoBorderRadius = isReducedMotion ? motionValue(0) : videoBorderRadiusTransform
  const nextSectionOpacity = isReducedMotion ? motionValue(1) : nextSectionOpacityTransform
  const nextSectionY = isReducedMotion ? motionValue(0) : nextSectionYTransform

  return {
    containerRef,
    heroOpacity,
    heroY,
    videoScale,
    videoBorderRadius,
    nextSectionOpacity,
    nextSectionY,
    isReducedMotion,
  }
}
