import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Quote } from '../ui/Quote'
import { PartnerLogos } from '../ui/PartnerLogos'
import { approach } from '@/content'
import { useSectionTracking } from '@/hooks'

export function Approach() {
  const sectionRef = useSectionTracking('approach')

  return (
    <section ref={sectionRef} className="py-12 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          {approach.heading}
        </SectionHeading>

        <p className="text-lg text-text-primary text-center mb-8">
          {approach.subheading}
        </p>

        <div className="space-y-4 mb-8">
          <Card>
            <h3 className="text-lg font-serif font-semibold text-coral mb-2">
              {approach.cards[0].number}. {approach.cards[0].title}
            </h3>
            <p className="text-text-secondary text-small mb-4">
              {approach.cards[0].description}
            </p>
            <PartnerLogos />

            {/* Lenny quote on Claude Code */}
            <div className="mt-4 relative">
              <div className="absolute -top-2 left-1/4 text-coral text-sm flex items-center gap-1">
                <span>↑</span>
                <span className="text-xs font-medium">Claude Code</span>
              </div>
              <Quote
                quote="Forget that it's called Claude Code — think of it as a super-intelligent AI running locally, able to do stuff directly on your computer: organizing files, enhancing images, brainstorming domain names, summarizing calls, creating tickets, and so much more."
                author="Lenny Rachitsky"
                role="Lenny's Newsletter"
                source="October 2025"
                className="mt-2"
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-serif font-semibold text-coral mb-2">
              {approach.cards[1].number}. {approach.cards[1].title}
            </h3>
            <p className="text-text-secondary text-small">
              {approach.cards[1].description}
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-serif font-semibold text-coral mb-2">
              {approach.cards[2].number}. {approach.cards[2].title}
            </h3>
            <p className="text-text-secondary text-small">
              {approach.cards[2].description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
