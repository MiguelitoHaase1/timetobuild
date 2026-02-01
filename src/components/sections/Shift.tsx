import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { shift } from '@/content'

export function Shift() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          {shift.heading}
        </SectionHeading>

        <div className="space-y-6 text-body text-text-secondary leading-relaxed mb-12">
          {shift.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>') }} />
          ))}

          <h3 className="text-xl font-serif font-semibold text-text-primary mt-8 mb-6">
            {shift.capabilitiesHeading}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {shift.capabilities.map((capability, index) => (
              <div key={index} className="panel bg-white">
                <p className="font-semibold text-coral mb-2">{capability.icon} {capability.title}</p>
                <p className="text-small text-text-secondary">{capability.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center italic pt-6">
            "{shift.quote}"
            <span className="block text-small text-text-muted mt-2">— {shift.quoteAuthor}</span>
          </p>

          <p>
            {shift.closing}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {shift.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
