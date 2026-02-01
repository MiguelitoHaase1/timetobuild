import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Approach() {
  const elements = [
    {
      title: 'Top-Down',
      description: 'CEO-level mandate and strategic commitment',
    },
    {
      title: 'Bottom-Up',
      description: 'Individual capability building through hands-on coaching',
    },
    {
      title: 'Governed Democratization',
      description: 'World-class tools within appropriate guardrails',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          The Approach
        </SectionHeading>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-text-primary mb-6">
            CEO mandate + bottom-up execution
          </p>
          <p className="text-body text-text-secondary mb-4">
            Think lean manufacturing, not IT deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {elements.map((element, index) => (
            <Card key={index}>
              <h3 className="text-xl font-serif font-semibold text-coral mb-3">
                {element.title}
              </h3>
              <p className="text-text-secondary">{element.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto panel text-center">
          <p className="text-body text-text-primary mb-2">
            <strong>Timeline:</strong> 3-6 months, not years
          </p>
          <p className="text-body text-text-secondary">
            Start with 5-20 person teams
          </p>
        </div>
      </div>
    </section>
  )
}
