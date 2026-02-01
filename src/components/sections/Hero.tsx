import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface HeroProps {
  onCTAClick?: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeading level={1} centered className="mb-6">
            This is a CEO conversation.
          </SectionHeading>

          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Not a CIO conversation. Not an IT initiative. A strategic inflection point.
          </p>

          <div className="max-w-3xl mx-auto space-y-6 text-body text-text-secondary leading-relaxed">
            <p>
              The 10x gap between best-in-class AI tools and corporate-approved tools isn't an IT efficiency issue—it's a competitive survival issue.
            </p>
            <p>
              When the gap was 10-20%, CIOs owned it. When the gap is 10x, the CEO must own it.
            </p>
          </div>
        </div>

        <div className="panel max-w-2xl mx-auto text-center">
          <p className="text-body text-text-primary mb-6">
            I'm <strong>Michael Haase</strong>, and I help mid-market enterprises implement truly game-changing AI—not vanilla AI deployments, but the kind that delivers 10x productivity gains.
          </p>
          <p className="text-small text-text-muted mb-8">
            <a href="mailto:michael@timetobuild.ai" className="text-coral hover:underline">
              michael@timetobuild.ai
            </a>
          </p>
          <Button onClick={onCTAClick}>
            Assess Your AI Readiness
          </Button>
        </div>
      </div>
    </section>
  )
}
