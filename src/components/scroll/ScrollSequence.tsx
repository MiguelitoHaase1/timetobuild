import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollSequence } from '../../hooks'
import { VideoBackground } from '../video/VideoBackground'
import { SectionHeading } from '../ui/SectionHeading'

interface VideoConfig {
  webmSrc: string
  mp4Src: string
  posterSrc: string
  fallbackSrc: string
}

interface ScrollSequenceProps {
  videoConfig: VideoConfig
  openingContent: ReactNode
  nextSectionTitle: string
}

/**
 * ScrollSequence component with 3-phase scroll-driven animation
 *
 * Phase 1 (0-30%): Hero text fades out and moves up
 * Phase 2 (30-60%): Video shrinks and gains border-radius
 * Phase 3 (60-100%): Next section title rises and fades in
 *
 * Uses position: sticky with 250vh container for pinned scroll effect
 */
export function ScrollSequence({
  videoConfig,
  openingContent,
  nextSectionTitle,
}: ScrollSequenceProps) {
  const {
    containerRef,
    heroOpacity,
    heroY,
    videoScale,
    videoBorderRadius,
    nextSectionOpacity,
    nextSectionY,
  } = useScrollSequence()

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      data-testid="scroll-sequence-container"
      style={{ height: '250vh' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Video with scale and border-radius animation */}
        <motion.div
          data-testid="video-container"
          style={{
            scale: videoScale,
            borderRadius: videoBorderRadius,
            position: 'absolute',
            inset: 0,
            willChange: 'transform',
          }}
        >
          <VideoBackground
            webmSrc={videoConfig.webmSrc}
            mp4Src={videoConfig.mp4Src}
            posterSrc={videoConfig.posterSrc}
            fallbackSrc={videoConfig.fallbackSrc}
          />
        </motion.div>

        {/* Opening content with fade and translate */}
        <motion.div
          data-testid="opening-content"
          style={{
            opacity: heroOpacity,
            y: heroY,
            position: 'relative',
            zIndex: 10,
            willChange: 'transform, opacity',
          }}
        >
          {openingContent}
        </motion.div>

        {/* Next section title rising */}
        <motion.div
          data-testid="next-section-title"
          style={{
            opacity: nextSectionOpacity,
            y: nextSectionY,
            position: 'absolute',
            bottom: '20%',
            left: 0,
            right: 0,
            zIndex: 10,
            willChange: 'transform, opacity',
          }}
        >
          <SectionHeading level={2} centered>
            {nextSectionTitle}
          </SectionHeading>
        </motion.div>
      </div>
    </div>
  )
}
