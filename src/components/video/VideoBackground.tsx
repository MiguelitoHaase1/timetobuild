import { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  webmSrc: string
  mp4Src: string
  posterSrc: string
  fallbackSrc: string
  className?: string
}

/**
 * VideoBackground component with lazy loading, multi-source support, and fallback handling
 *
 * Features:
 * - Lazy loads video using Intersection Observer
 * - Multi-source support (WebM primary, MP4 fallback)
 * - Poster image for instant display
 * - Error handling with static image fallback
 * - Brand-aligned color filter
 */
export function VideoBackground({
  webmSrc,
  mp4Src,
  posterSrc,
  fallbackSrc,
  className = ''
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Lazy load video when in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Handle video load errors
  const handleError = () => {
    setHasError(true)
  }

  // Keep video on last frame when it ends
  const handleVideoEnd = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      // Keep showing the last frame
    }
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Check for data saver mode
  const saveData =
    typeof navigator !== 'undefined' &&
    'connection' in navigator &&
    navigator.connection !== null &&
    typeof navigator.connection === 'object' &&
    'saveData' in navigator.connection &&
    navigator.connection.saveData === true

  // Show poster only if reduced motion or save data
  if (prefersReducedMotion || saveData || hasError) {
    return (
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
        style={{
          backgroundImage: `url(${hasError ? fallbackSrc : posterSrc})`,
          filter: 'grayscale(0.3) sepia(0.2) brightness(0.9)'
        }}
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      style={{
        filter: 'grayscale(0.3) sepia(0.2) brightness(0.9)',
        willChange: 'transform'
      }}
      autoPlay
      muted
      playsInline
      poster={posterSrc}
      onError={handleError}
      onEnded={handleVideoEnd}
    >
      {shouldLoad && (
        <>
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </>
      )}
    </video>
  )
}
