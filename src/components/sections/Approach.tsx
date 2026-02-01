import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Approach() {
  return (
    <section className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          The Approach: CEO Mandate + Bottom-Up Execution
        </SectionHeading>

        <div className="space-y-8 text-body text-text-secondary leading-relaxed mb-16">
          <p className="text-xl text-text-primary text-center">
            Think lean manufacturing, not IT deployment.
          </p>

          <p>
            The organizations capturing 10x gains aren't treating this as a technology rollout. They're treating it as a transformation of how work happens—with executive mandate and grassroots execution.
          </p>

          <p>
            This requires three essential elements working together:
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-4">
              1. Top-Down: CEO-Level Strategic Commitment
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                This isn't a CIO initiative that the CEO sponsors. The CEO must own it as a strategic priority, signaling that this is about competitive position, not operational efficiency.
              </p>
              <p>
                When executives treat AI as "another IT project," teams optimize for IT approval, not for impact. When the CEO frames it as strategic transformation, teams optimize for results.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-4">
              2. Bottom-Up: Individual Capability Building
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                The transformation happens one person at a time, through hands-on coaching—not training sessions or documentation.
              </p>
              <p>
                Start with 5-20 people who are curious and have real problems to solve. Give them world-class tools and coaching. Let them build things that matter to their work. When they show what's possible, others will want in.
              </p>
              <p>
                This is how capability spreads: through demonstration, not mandate. Through "I saw what Sarah built and I want to do that" not "IT says we should use this tool."
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-4">
              3. Governed Democratization: World-Class Tools with Guardrails
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                The best tools, available to knowledge workers, within appropriate security and compliance frameworks.
              </p>
              <p>
                Not "approved tools only." Not "pilot programs with limited access." Real tools that deliver real capability, with governance that manages actual risks rather than theoretical ones.
              </p>
              <p>
                The companies winning this race solved the security and compliance challenges so they could deploy best-in-class tools broadly. The ones losing are still debating whether to allow them at all.
              </p>
            </div>
          </Card>
        </div>

        <div className="panel text-center space-y-4">
          <h3 className="text-xl font-serif font-semibold text-text-primary">
            Timeline: 3-6 Months, Not Years
          </h3>
          <p className="text-text-secondary">
            Start with a focused team of 5-20 people. Build capability, demonstrate impact, and expand from there.
          </p>
          <p className="text-text-secondary">
            This isn't a multi-year enterprise transformation program. It's a focused sprint to build new capabilities and prove what's possible.
          </p>
        </div>
      </div>
    </section>
  )
}
