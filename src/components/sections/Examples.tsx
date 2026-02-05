import { SectionHeading } from '../ui/SectionHeading'
import { impact } from '@/content'
import { useSectionTracking } from '@/hooks'

export function Examples() {
  const sectionRef = useSectionTracking('examples')

  return (
    <section ref={sectionRef} className="py-20 px-6 pb-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          {impact.heading}
        </SectionHeading>

        {/* Introduction paragraphs */}
        <div className="text-lg text-text-primary text-center max-w-3xl mx-auto space-y-4">
          {impact.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
