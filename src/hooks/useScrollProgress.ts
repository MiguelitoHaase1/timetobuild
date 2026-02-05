import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface ScrollProgressValues {
  scrollProgress: MotionValue<number>
  parallaxY: MotionValue<number>
  contentOpacity: MotionValue<number>
  scale: MotionValue<number>
}

/**
 * Hook that provides scroll-based animation values for parallax effects
 *
 * @returns Object containing motion values for scroll-based animations:
 * - scrollProgress: 0 to 1 as container scrolls into view
 * - parallaxY: 0 to -100px for parallax background movement
 * - contentOpacity: 1 to 0 (fades out at 50% scroll)
 * - scale: 1 to 1.15 for subtle zoom effect
 */
export function useScrollProgress(): ScrollProgressValues & { containerRef: React.RefObject<HTMLElement> } {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return {
    containerRef,
    scrollProgress: scrollYProgress,
    parallaxY,
    contentOpacity,
    scale
  }
}
