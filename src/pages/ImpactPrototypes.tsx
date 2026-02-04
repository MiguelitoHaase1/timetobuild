import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { impact } from '@/content'
import { useAnalytics } from '@/hooks'

export function ImpactPrototypes() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    capabilities: false,
    stories: false,
  })
  const { trackEvent, EVENTS } = useAnalytics()

  const spotlightItems = [
    {
      quote: impact.powerUserQuotes[0].quote,
      author: impact.powerUserQuotes[0].author,
      role: impact.powerUserQuotes[0].role,
      source: impact.powerUserQuotes[0].source,
    },
    {
      quote: impact.powerUserQuotes[1].quote,
      author: impact.powerUserQuotes[1].author,
      role: impact.powerUserQuotes[1].role,
      source: impact.powerUserQuotes[1].source,
    },
  ]

  const toggleSection = (section: string) => {
    const isExpanding = !expandedSections[section]
    trackEvent(EVENTS.IMPACT_SECTION_TOGGLE, {
      section,
      expanded: isExpanding,
    })
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const nextSpotlight = () => {
    trackEvent(EVENTS.IMPACT_SPOTLIGHT_NAV, {
      direction: 'next',
      from_index: currentSpotlight,
    })
    setCurrentSpotlight((prev) => (prev + 1) % spotlightItems.length)
  }

  const prevSpotlight = () => {
    trackEvent(EVENTS.IMPACT_SPOTLIGHT_NAV, {
      direction: 'prev',
      from_index: currentSpotlight,
    })
    setCurrentSpotlight((prev) => (prev - 1 + spotlightItems.length) % spotlightItems.length)
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-semibold mb-4">Impact Section Prototypes</h1>
          <p className="text-text-secondary">Compare three creative directions side-by-side</p>
        </div>

        {/* Direction 2: Hero Quote First */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="inline-block bg-coral text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Direction 2: Hero Quote First
            </span>
            <p className="text-text-secondary text-sm">Lead with emotion, support with evidence</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SectionHeading level={2} centered className="mb-12">
              {impact.heading}
            </SectionHeading>

            {/* Large hero quote */}
            <div className="mb-12">
              <blockquote className="text-2xl md:text-3xl font-serif text-text-primary leading-relaxed text-center mb-6">
                "{impact.powerUserQuotes[0].quote}"
              </blockquote>
              <div className="text-center text-text-secondary">
                <div className="font-semibold text-text-primary">{impact.powerUserQuotes[0].author}</div>
                <div className="text-small text-text-muted">{impact.powerUserQuotes[0].role} • {impact.powerUserQuotes[0].source}</div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-cream-panel my-12"></div>

            {/* Compact capability icons in a row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {impact.capabilities.map((capability, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{capability.icon}</div>
                  <div className="font-semibold text-sm text-text-primary mb-1">{capability.title}</div>
                  <div className="text-xs text-text-secondary">{capability.description}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-cream-panel my-12"></div>

            {/* Gibson quote */}
            <div className="text-center">
              <p className="text-xl italic text-text-primary mb-2">
                "{impact.leadingIndicators.quote}"
              </p>
              <p className="text-small text-text-muted">— {impact.leadingIndicators.quoteAuthor}</p>
            </div>

            {/* See more button */}
            <div className="text-center mt-8">
              <button className="text-coral hover:underline font-semibold">
                See more stories →
              </button>
            </div>
          </div>
        </div>

        {/* Direction 3: Progressive Disclosure */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="inline-block bg-coral text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Direction 3: Progressive Disclosure
            </span>
            <p className="text-text-secondary text-sm">Show less upfront, let users explore</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SectionHeading level={2} centered className="mb-12">
              {impact.heading}
            </SectionHeading>

            {/* Quote cards - compact */}
            <div className="space-y-4 mb-8">
              <div className="panel bg-cream-panel">
                <blockquote className="text-lg text-text-primary mb-2">
                  "Zero coding experience... half a day weekly."
                </blockquote>
                <p className="text-small text-text-muted text-right">— Sam Bowman</p>
              </div>

              <div className="panel bg-cream-panel">
                <blockquote className="text-lg text-text-primary mb-2">
                  "Month of work in 3 days."
                </blockquote>
                <p className="text-small text-text-muted text-right">— Anonymous, NN</p>
              </div>
            </div>

            {/* Expandable sections */}
            <div className="space-y-4 mb-12">
              <button
                onClick={() => toggleSection('capabilities')}
                className="w-full panel bg-white border-2 border-cream-panel hover:border-coral transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-text-primary">▼ What do they build?</span>
                <span className="text-coral">{expandedSections.capabilities ? '−' : '+'}</span>
              </button>

              {expandedSections.capabilities && (
                <div className="grid md:grid-cols-2 gap-4 pl-6">
                  {impact.capabilities.map((capability, index) => (
                    <div key={index} className="panel bg-cream-panel">
                      <p className="font-semibold text-coral mb-1">{capability.icon} {capability.title}</p>
                      <p className="text-small text-text-secondary">{capability.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => toggleSection('stories')}
                className="w-full panel bg-white border-2 border-cream-panel hover:border-coral transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-text-primary">▼ More stories</span>
                <span className="text-coral">{expandedSections.stories ? '−' : '+'}</span>
              </button>

              {expandedSections.stories && (
                <div className="space-y-4 pl-6">
                  {impact.additionalQuotes.slice(0, 3).map((item, index) => (
                    <div key={index} className="panel bg-cream-panel">
                      <blockquote className="text-text-primary mb-2">"{item.quote}"</blockquote>
                      <p className="text-small text-text-muted">— {item.author}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-cream-panel my-12"></div>

            {/* Gibson quote */}
            <div className="text-center">
              <p className="text-xl italic text-text-primary mb-2">
                "{impact.leadingIndicators.quote}"
              </p>
              <p className="text-small text-text-muted">— {impact.leadingIndicators.quoteAuthor}</p>
            </div>
          </div>
        </div>

        {/* Direction 4: Single Spotlight */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="inline-block bg-coral text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Direction 4: Single Spotlight
            </span>
            <p className="text-text-secondary text-sm">Feature ONE quote prominently with carousel</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SectionHeading level={2} centered className="mb-8">
              {impact.heading}
            </SectionHeading>

            <div className="text-center mb-8">
              <span className="inline-block text-sm font-semibold text-coral uppercase tracking-wide">
                ★ Employee Engagement ★
              </span>
            </div>

            {/* Spotlight card */}
            <div className="max-w-2xl mx-auto">
              <div className="panel bg-cream-panel relative">
                <blockquote className="text-xl font-serif text-text-primary leading-relaxed mb-6">
                  "{spotlightItems[currentSpotlight].quote}"
                </blockquote>

                {/* Capabilities grid inside card */}
                <div className="grid grid-cols-2 gap-4 my-6 py-6 border-y border-white">
                  {impact.capabilities.map((capability, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{capability.icon}</div>
                      <div className="text-xs font-semibold text-text-primary">{capability.title}</div>
                    </div>
                  ))}
                </div>

                <div className="text-right text-text-secondary">
                  <div className="font-semibold text-text-primary">{spotlightItems[currentSpotlight].author}</div>
                  <div className="text-small text-text-muted">
                    {spotlightItems[currentSpotlight].role} • {spotlightItems[currentSpotlight].source}
                  </div>
                </div>
              </div>

              {/* Carousel controls */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={prevSpotlight}
                  className="text-coral hover:underline font-semibold"
                >
                  ← Previous
                </button>
                <span className="text-text-muted text-sm">
                  {currentSpotlight + 1} of {spotlightItems.length}
                </span>
                <button
                  onClick={nextSpotlight}
                  className="text-coral hover:underline font-semibold"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-cream-panel my-12"></div>

            {/* Gibson quote */}
            <div className="text-center">
              <p className="text-xl italic text-text-primary mb-2">
                "{impact.leadingIndicators.quote}"
              </p>
              <p className="text-small text-text-muted">— {impact.leadingIndicators.quoteAuthor}</p>
            </div>
          </div>
        </div>

        {/* Comparison footer */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-serif font-semibold mb-4">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-cream-panel">
                  <th className="text-left py-3 px-4">Direction</th>
                  <th className="text-left py-3 px-4">Visual Weight</th>
                  <th className="text-left py-3 px-4">Flow Clarity</th>
                  <th className="text-left py-3 px-4">Emotional Impact</th>
                  <th className="text-left py-3 px-4">Capabilities</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cream-panel">
                  <td className="py-3 px-4 font-semibold">Hero Quote First</td>
                  <td className="py-3 px-4">Light</td>
                  <td className="py-3 px-4">★★★★☆</td>
                  <td className="py-3 px-4">High</td>
                  <td className="py-3 px-4">Yes (as icons)</td>
                </tr>
                <tr className="border-b border-cream-panel">
                  <td className="py-3 px-4 font-semibold">Progressive Disclosure</td>
                  <td className="py-3 px-4">Very Light</td>
                  <td className="py-3 px-4">★★★☆☆</td>
                  <td className="py-3 px-4">High</td>
                  <td className="py-3 px-4">Hidden</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Spotlight</td>
                  <td className="py-3 px-4">Light</td>
                  <td className="py-3 px-4">★★★★☆</td>
                  <td className="py-3 px-4">Very High</td>
                  <td className="py-3 px-4">Yes (in card)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
