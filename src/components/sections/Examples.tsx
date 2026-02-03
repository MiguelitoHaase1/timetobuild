import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { DemoModal } from '../ui/DemoModal'
import { QuotesModal } from '../ui/QuotesModal'
import { impact } from '@/content'

export function Examples() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isQuotesModalOpen, setIsQuotesModalOpen] = useState(false)

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
          {impact.heading}
        </SectionHeading>

        <div className="text-lg text-text-primary text-center max-w-3xl mx-auto mb-12 space-y-4">
          {impact.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-8">
          {/* What people build section */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-text-primary mb-6 text-center">
              {impact.capabilitiesHeading}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {impact.capabilities.map((capability, index) => (
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
            {impact.powerUserQuotes.map((item, index) => (
              <div key={index} className="panel bg-white">
                <blockquote className="italic text-lg text-text-primary mb-4">
                  "{item.quote}"
                </blockquote>
                <div className="text-small">
                  <div className="font-semibold text-text-primary">{item.author}</div>
                  <div className="text-text-muted">{item.role} • {item.source}</div>
                </div>
              </div>
            ))}

            {/* See more button */}
            <div className="text-center">
              <button
                onClick={() => setIsQuotesModalOpen(true)}
                className="text-coral hover:underline font-semibold"
              >
                See more stories →
              </button>
            </div>
          </div>

          {/* Leading indicators section */}
          <div className="pt-8">
            <div className="panel bg-white max-w-3xl mx-auto">
              <p className="text-body text-text-secondary leading-relaxed text-center mb-4">
                {impact.leadingIndicators.heading}
              </p>

              <p className="text-center italic text-xl text-text-primary border-t border-cream-panel pt-4">
                "{impact.leadingIndicators.quote}"
                <span className="block text-small text-text-muted mt-2">— {impact.leadingIndicators.quoteAuthor}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
      <QuotesModal isOpen={isQuotesModalOpen} onClose={() => setIsQuotesModalOpen(false)} />
    </section>
  )
}
