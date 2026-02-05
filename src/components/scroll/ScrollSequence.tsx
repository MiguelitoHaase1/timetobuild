import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollSequence } from '../../hooks'
import { VideoBackground } from '../video/VideoBackground'

interface VideoConfig {
  webmSrc: string
  mp4Src: string
  posterSrc: string
  fallbackSrc: string
}

interface ScrollSequenceProps {
  videoConfig: VideoConfig
  openingContent: ReactNode
}

/**
 * ScrollSequence component with 2-phase scroll-driven animation
 *
 * Phase 1 (0-50%): Hero text fades out and moves up
 * Phase 2 (50-100%): Video shrinks and gains border-radius
 *
 * Uses position: sticky with 150vh container for pinned scroll effect.
 * Next section appears immediately after the scroll sequence.
 */
export function ScrollSequence({
  videoConfig,
  openingContent,
}: ScrollSequenceProps) {
  const {
    containerRef,
    heroOpacity,
    heroY,
    videoScale,
    videoBorderRadius,
  } = useScrollSequence()

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      data-testid="scroll-sequence-container"
      style={{ height: '150vh' }}
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
          {/* Dark overlay for text readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%)',
              pointerEvents: 'none',
            }}
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
      </div>
    </div>
  )
}
