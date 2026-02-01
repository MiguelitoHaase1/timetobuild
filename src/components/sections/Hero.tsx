import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface HeroProps {
  onCTAClick?: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading level={1} centered className="mb-6">
          This is a CEO conversation.
        </SectionHeading>

        <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Not a CIO conversation. Not an IT initiative. A strategic inflection point.
        </p>

        <p className="text-body text-text-secondary mb-12 max-w-2xl mx-auto">
          AI Empowerment consulting - helping mid-market companies capture 10x productivity gains
        </p>

        <Button onClick={onCTAClick}>
          Assess Your AI Readiness
        </Button>
      </div>
    </section>
  )
}
