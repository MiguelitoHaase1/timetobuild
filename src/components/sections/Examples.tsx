import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { DemoModal } from '../ui/DemoModal'
import { shift } from '@/content'

export function Examples() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true)
  }

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false)
  }

  return (
    <section className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          Examples of AI empowered employees
        </SectionHeading>

        <p className="text-lg text-text-primary text-center max-w-3xl mx-auto mb-12">
          Are you wondering what an AI empowered employee looks like? Let me finish off with a few quotes of AI empowered employees and examples of what they built. This should provide an understanding of the unit of value you'll be creating, but please notice it's just the tip of the iceberg. Any team in any domain will optimize their individual workflow in just the way they need, if we empower them with the right tools.
        </p>

        <div className="space-y-8">
          {/* What people build section */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-text-primary mb-6 text-center">
              {shift.capabilitiesHeading}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {shift.capabilities.map((capability, index) => (
                <div key={index} className="panel bg-white">
                  <p className="font-semibold text-coral mb-2">{capability.icon} {capability.title}</p>
                  <p className="text-small text-text-secondary mb-3">{capability.description}</p>
                  <button
                    onClick={handleOpenDemo}
                    className="text-small text-coral hover:underline font-semibold"
                  >
                    See Example →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Power user quotes */}
          <div className="space-y-6">
            {shift.powerUserQuotes.map((quote, index) => (
              <blockquote key={index} className="border-l-4 border-coral pl-6 py-2 italic text-lg text-text-primary">
                "{quote}"
              </blockquote>
            ))}
          </div>

          {/* Leading indicators section */}
          <div className="pt-8">
            <div className="panel bg-white max-w-3xl mx-auto">
              <p className="text-body text-text-secondary leading-relaxed text-center mb-4">
                {shift.leadingIndicators.heading}
              </p>

              <p className="text-center italic text-xl text-text-primary border-t border-cream-panel pt-4">
                "{shift.leadingIndicators.quote}"
                <span className="block text-small text-text-muted mt-2">— {shift.leadingIndicators.quoteAuthor}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </section>
  )
}
