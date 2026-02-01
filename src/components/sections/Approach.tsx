import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { approach, contact } from '@/content'

interface ApproachProps {
  onAssessmentClick?: () => void
}

export function Approach({ onAssessmentClick }: ApproachProps) {
  return (
    <section className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          {approach.heading}
        </SectionHeading>

        <p className="text-xl text-text-primary text-center mb-12">
          {approach.subheading}
        </p>

        <div className="space-y-6 mb-12">
          {approach.cards.map((card, index) => (
            <Card key={index}>
              <h3 className="text-xl font-serif font-semibold text-coral mb-3">
                {card.number}. {card.title}
              </h3>
              <p className="text-text-secondary">
                {card.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="panel text-center">
          <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
            {approach.timeline.heading}
          </h3>
          <p className="text-text-secondary">
            {approach.timeline.description}
          </p>
        </div>

        {onAssessmentClick && (
          <div className="text-center mt-12">
            <Button onClick={onAssessmentClick} size="large">
              {approach.assessmentCta}
            </Button>
          </div>
        )}

        <div className="text-center panel max-w-xl mx-auto mt-12">
          <p className="text-body text-text-primary">
            Want to know more about <strong>Time To Build</strong>? Write{' '}
            <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
