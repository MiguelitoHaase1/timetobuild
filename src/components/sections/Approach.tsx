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
          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              {approach.cards[0].number}. {approach.cards[0].title}
            </h3>
            <p className="text-text-secondary">
              {approach.cards[0].description}
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              {approach.cards[1].number}. {approach.cards[1].title}
            </h3>
            <p className="text-text-secondary">
              {approach.cards[1].description}
            </p>
            {onAssessmentClick && (
              <div className="mt-4 pt-4 border-t border-cream-panel">
                <Button onClick={onAssessmentClick} variant="secondary">
                  {approach.assessmentCta}
                </Button>
              </div>
            )}
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              {approach.cards[2].number}. {approach.cards[2].title}
            </h3>
            <p className="text-text-secondary">
              {approach.cards[2].description}
            </p>
          </Card>
        </div>

        <div className="panel text-center">
          <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
            {approach.timeline.heading}
          </h3>
          <p className="text-text-secondary">
            {approach.timeline.description}
          </p>
        </div>

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
