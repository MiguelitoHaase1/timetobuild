import { SectionHeading } from '../ui/SectionHeading'

export function Shift() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          The Shift Is Already Happening
        </SectionHeading>

        <div className="space-y-6 text-body text-text-secondary leading-relaxed">
          <p>
            Knowledge workers are doing in <strong>days what took weeks</strong>. People with zero coding experience are building tools that save their teams half a day every week.
          </p>

          <p>
            The bottleneck shifts from <em>doing</em> to <em>deciding</em>. When execution is 10x faster, the constraint becomes: what should we build? Which problems matter most?
          </p>

          <h3 className="text-xl font-serif font-semibold text-text-primary mt-8 mb-6">
            What Anyone Can Build Today:
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="panel bg-white">
              <p className="font-semibold text-coral mb-2">📊 Presentations & Reports</p>
              <p className="text-small text-text-secondary">Sophisticated data analysis, visualizations</p>
            </div>
            <div className="panel bg-white">
              <p className="font-semibold text-coral mb-2">🚀 Custom Apps</p>
              <p className="text-small text-text-secondary">Deployed to production, fully functional</p>
            </div>
            <div className="panel bg-white">
              <p className="font-semibold text-coral mb-2">📚 Document Analysis</p>
              <p className="text-small text-text-secondary">Cognitive analysis across hundreds of docs</p>
            </div>
            <div className="panel bg-white">
              <p className="font-semibold text-coral mb-2">⚡ Automated Workflows</p>
              <p className="text-small text-text-secondary">Replacing manual, multi-step processes</p>
            </div>
          </div>

          <p className="text-center italic pt-6">
            "The future is already here. It just isn't evenly distributed yet."
            <span className="block text-small text-text-muted mt-2">— William Gibson</span>
          </p>

          <p>
            The question: will you be among the first to capture these gains, or among the last?
          </p>
        </div>
      </div>
    </section>
  )
}
