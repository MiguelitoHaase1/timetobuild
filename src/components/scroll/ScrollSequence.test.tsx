import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '../../test/test-utils'
import { mockReducedMotion } from '../../test/test-utils'
import { ScrollSequence } from './ScrollSequence'

describe('ScrollSequence', () => {
  let cleanup: (() => void) | undefined

  afterEach(() => {
    if (cleanup) {
      cleanup()
      cleanup = undefined
    }
  })

  const mockVideoConfig = {
    webmSrc: '/test-video.webm',
    mp4Src: '/test-video.mp4',
    posterSrc: '/test-poster.jpg',
    fallbackSrc: '/test-fallback.jpg',
  }

  const mockOpeningContent = (
    <div data-testid="mock-opening-content">
      <h1>Opening Content</h1>
    </div>
  )

  const mockNextSectionTitle = 'The Shift'

  it('renders 250vh container for sticky scroll', () => {
    const { container } = render(
      <ScrollSequence
        videoConfig={mockVideoConfig}
        openingContent={mockOpeningContent}
        nextSectionTitle={mockNextSectionTitle}
      />
    )

    const scrollContainer = container.firstChild as HTMLElement
    expect(scrollContainer).toBeTruthy()
    expect(scrollContainer.style.height).toBe('250vh')
  })

  it('renders sticky inner at top: 0', () => {
    const { container } = render(
      <ScrollSequence
        videoConfig={mockVideoConfig}
        openingContent={mockOpeningContent}
        nextSectionTitle={mockNextSectionTitle}
      />
    )

    const scrollContainer = container.firstChild as HTMLElement
    const stickyInner = scrollContainer.firstChild as HTMLElement
    expect(stickyInner.style.position).toBe('sticky')
    expect(stickyInner.style.top).toBe('0px')
    expect(stickyInner.style.height).toBe('100vh')
  })

  it('renders children: video, opening content, next section title', () => {
    render(
      <ScrollSequence
        videoConfig={mockVideoConfig}
        openingContent={mockOpeningContent}
        nextSectionTitle={mockNextSectionTitle}
      />
    )

    expect(screen.getByTestId('video-container')).toBeInTheDocument()
    expect(screen.getByTestId('opening-content')).toBeInTheDocument()
    expect(screen.getByTestId('next-section-title')).toBeInTheDocument()
    expect(screen.getByText('Opening Content')).toBeInTheDocument()
    expect(screen.getByText('The Shift')).toBeInTheDocument()
  })

  it('adds data-testid attributes for E2E', () => {
    render(
      <ScrollSequence
        videoConfig={mockVideoConfig}
        openingContent={mockOpeningContent}
        nextSectionTitle={mockNextSectionTitle}
      />
    )

    expect(screen.getByTestId('scroll-sequence-container')).toBeInTheDocument()
    expect(screen.getByTestId('video-container')).toBeInTheDocument()
    expect(screen.getByTestId('opening-content')).toBeInTheDocument()
    expect(screen.getByTestId('next-section-title')).toBeInTheDocument()
  })

  it('respects reduced motion preference', () => {
    cleanup = mockReducedMotion(true)

    render(
      <ScrollSequence
        videoConfig={mockVideoConfig}
        openingContent={mockOpeningContent}
        nextSectionTitle={mockNextSectionTitle}
      />
    )

    // Component should render without animations
    expect(screen.getByTestId('scroll-sequence-container')).toBeInTheDocument()
    expect(screen.getByTestId('video-container')).toBeInTheDocument()
    expect(screen.getByTestId('opening-content')).toBeInTheDocument()
    expect(screen.getByTestId('next-section-title')).toBeInTheDocument()
  })
})
