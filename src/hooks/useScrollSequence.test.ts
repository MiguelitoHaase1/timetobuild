import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollSequence } from './useScrollSequence'
import { mockReducedMotion } from '../test/test-utils'

describe('useScrollSequence', () => {
  let cleanup: (() => void) | undefined

  afterEach(() => {
    if (cleanup) {
      cleanup()
      cleanup = undefined
    }
  })

  describe('phase detection', () => {
    it('returns phase 1 when scroll progress is 0-30%', () => {
      const { result } = renderHook(() => useScrollSequence())

      // Simulate scroll progress at 0%
      result.current.heroOpacity.set(1)
      expect(result.current.heroOpacity.get()).toBe(1)

      // Simulate scroll progress at 15%
      result.current.heroOpacity.set(0.5)
      expect(result.current.heroOpacity.get()).toBe(0.5)
    })

    it('returns phase 2 when scroll progress is 30-60%', () => {
      const { result } = renderHook(() => useScrollSequence())

      // Simulate scroll progress at 45%
      result.current.videoScale.set(0.825)
      expect(result.current.videoScale.get()).toBe(0.825)
    })

    it('returns phase 3 when scroll progress is 60-100%', () => {
      const { result } = renderHook(() => useScrollSequence())

      // Simulate scroll progress at 80%
      result.current.nextSectionOpacity.set(0.5)
      expect(result.current.nextSectionOpacity.get()).toBe(0.5)
    })
  })

  describe('phase 1: hero fade', () => {
    it('heroOpacity starts at 1 and ends at 0', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 0% scroll
      result.current.heroOpacity.set(1)
      expect(result.current.heroOpacity.get()).toBe(1)

      // At 30% scroll
      result.current.heroOpacity.set(0)
      expect(result.current.heroOpacity.get()).toBe(0)
    })

    it('heroY starts at 0 and ends at -50', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 0% scroll
      result.current.heroY.set(0)
      expect(result.current.heroY.get()).toBe(0)

      // At 30% scroll
      result.current.heroY.set(-50)
      expect(result.current.heroY.get()).toBe(-50)
    })
  })

  describe('phase 2: video shrink', () => {
    it('videoScale starts at 1 and ends at 0.65', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 30% scroll
      result.current.videoScale.set(1)
      expect(result.current.videoScale.get()).toBe(1)

      // At 60% scroll
      result.current.videoScale.set(0.65)
      expect(result.current.videoScale.get()).toBe(0.65)
    })

    it('videoBorderRadius starts at 0 and ends at 24', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 30% scroll
      result.current.videoBorderRadius.set(0)
      expect(result.current.videoBorderRadius.get()).toBe(0)

      // At 60% scroll
      result.current.videoBorderRadius.set(24)
      expect(result.current.videoBorderRadius.get()).toBe(24)
    })
  })

  describe('phase 3: title rise', () => {
    it('nextSectionOpacity starts at 0 and ends at 1', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 60% scroll
      result.current.nextSectionOpacity.set(0)
      expect(result.current.nextSectionOpacity.get()).toBe(0)

      // At 90% scroll
      result.current.nextSectionOpacity.set(1)
      expect(result.current.nextSectionOpacity.get()).toBe(1)
    })

    it('nextSectionY starts at 100 and ends at 0', () => {
      const { result } = renderHook(() => useScrollSequence())

      // At 60% scroll
      result.current.nextSectionY.set(100)
      expect(result.current.nextSectionY.get()).toBe(100)

      // At 100% scroll
      result.current.nextSectionY.set(0)
      expect(result.current.nextSectionY.get()).toBe(0)
    })
  })

  describe('reduced motion', () => {
    beforeEach(() => {
      cleanup = mockReducedMotion(true)
    })

    it('returns isReducedMotion as true when prefers-reduced-motion is enabled', () => {
      const { result } = renderHook(() => useScrollSequence())
      expect(result.current.isReducedMotion).toBe(true)
    })

    it('returns static values when reduced motion is enabled', () => {
      const { result } = renderHook(() => useScrollSequence())

      // All motion values should remain static
      expect(result.current.heroOpacity.get()).toBe(1)
      expect(result.current.heroY.get()).toBe(0)
      expect(result.current.videoScale.get()).toBe(1)
      expect(result.current.videoBorderRadius.get()).toBe(0)
      expect(result.current.nextSectionOpacity.get()).toBe(1)
      expect(result.current.nextSectionY.get()).toBe(0)
    })
  })

  it('returns a ref for the container element', () => {
    const { result } = renderHook(() => useScrollSequence())
    expect(result.current.containerRef).toBeDefined()
    expect(result.current.containerRef.current).toBeNull()
  })
})
