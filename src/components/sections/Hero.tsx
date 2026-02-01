import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface HeroProps {
  onCTAClick?: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeading level={1} centered className="mb-6">
            AI Tools: A CEO Conversation
          </SectionHeading>

          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Not a CIO conversation. Not an IT initiative.
          </p>

          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            The efficiency delta between best-in-class AI tools and corporate-approved tools is now 10x. That's not an IT problem—it's a competitive survival issue.
          </p>
        </div>

        <div className="panel max-w-2xl mx-auto text-center">
          <p className="text-body text-text-primary mb-6">
            I'm <strong>Michael Haase</strong>. I help mid-market companies capture game-changing productivity gains from AI.
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
