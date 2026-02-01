import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Card } from '../ui/Card'

export function Proof() {
  const capabilities = [
    'Presentations (HTML, PPTX, XLS, PDFs)',
    'Data analysis (replacing MATLAB, SAS, R)',
    'Cognitive analysis of multiple documents',
    'Problem-solving flows',
    'Apps and websites',
    'Local computer use apps',
  ]

  return (
    <section className="py-20 px-6 bg-cream-panel">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} centered className="mb-16">
          The Proof
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Testimonials */}
          <div>
            <h3 className="text-h2 font-serif mb-6">Voices from the Field</h3>
            <div className="space-y-4">
              <TestimonialCard
                quote="Zero coding experience... save the team half a day weekly"
                author="Sam Bowman"
                role="Anthropic"
              />
              <TestimonialCard
                quote="Did a month of work in 3 days"
                author="Allan"
                role="PM, Jabra"
              />
              <TestimonialCard
                quote="It's about being willing to try 3-4 simple commands. That's it."
                author="Teresa Torres"
                role="Product Discovery Coach"
              />
            </div>
          </div>

          {/* Right column: Capabilities */}
          <div>
            <h3 className="text-h2 font-serif mb-6">What Anyone Can Build</h3>
            <Card>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    <span className="text-text-primary">{capability}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
