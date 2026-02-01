import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { proof } from '@/content'

export function Proof() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-6">
          {proof.heading}
        </SectionHeading>

        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          {proof.introduction}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {proof.testimonials.map((testimonial, index) => (
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
