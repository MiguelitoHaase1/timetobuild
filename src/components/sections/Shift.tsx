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

          <p>
            What anyone can build today:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="text-coral mr-3">•</span>
              <span>Presentations and reports with sophisticated data analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-coral mr-3">•</span>
              <span>Custom apps deployed to production</span>
            </li>
            <li className="flex items-start">
              <span className="text-coral mr-3">•</span>
              <span>Cognitive analysis across hundreds of documents</span>
            </li>
            <li className="flex items-start">
              <span className="text-coral mr-3">•</span>
              <span>Automated workflows replacing manual steps</span>
            </li>
          </ul>

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
