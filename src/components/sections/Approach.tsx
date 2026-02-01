import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

export function Approach() {
  return (
    <section className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          The Approach
        </SectionHeading>

        <p className="text-xl text-text-primary text-center mb-12">
          CEO mandate + bottom-up execution. Think lean manufacturing, not IT deployment.
        </p>

        <div className="space-y-6 mb-12">
          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              1. CEO-Level Commitment
            </h3>
            <p className="text-text-secondary">
              The CEO owns this as strategic priority. When treated as "another IT project," teams optimize for approval. When framed as strategic transformation, teams optimize for results.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              2. Individual Capability Building
            </h3>
            <p className="text-text-secondary">
              Start with 5-20 people. Hands-on coaching, not training sessions. Let them build things that matter. Capability spreads through demonstration: "I saw what Sarah built and I want to do that."
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-semibold text-coral mb-3">
              3. World-Class Tools with Guardrails
            </h3>
            <p className="text-text-secondary">
              Best-in-class tools, broadly available, within security and compliance frameworks. Not "approved tools only" or pilot programs. Companies winning this solved governance so they could deploy real capability.
            </p>
          </Card>
        </div>

        <div className="panel text-center">
          <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
            3-6 Months, Not Years
          </h3>
          <p className="text-text-secondary">
            Focused team. Build capability, demonstrate impact, expand.
          </p>
        </div>
      </div>
    </section>
  )
}
