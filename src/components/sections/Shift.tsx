import { SectionHeading } from '../ui/SectionHeading'

export function Shift() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          The Shift Is Already Happening
        </SectionHeading>

        <div className="space-y-8 text-body text-text-secondary leading-relaxed">
          <p className="text-xl text-text-primary text-center mb-8">
            The 10x gap between best-in-class AI tools and corporate-approved tools is already here.
          </p>

          <div className="space-y-6">
            <p>
              Non-technical knowledge workers are doing in <strong>days what took weeks</strong>. This isn't happening among technical early adopters—it's across roles and industries. People with zero coding experience are building tools that save their teams days of work every week.
            </p>

            <p>
              The bottleneck is shifting from <em>doing</em> to <em>deciding</em>. When your team can execute 10x faster, the constraint becomes: what should we build? What problems should we solve? Which opportunities should we pursue?
            </p>

            <p>
              This changes everything about how knowledge work happens. Tasks that required specialized skills now require good judgment. Work that took coordination across multiple people can be done by one person with the right AI tools.
            </p>

            <p>
              What anyone can build today would have been impossible—or required a team of specialists—just two years ago:
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-coral mr-3">•</span>
                <span>Presentations, spreadsheets, and reports with sophisticated data analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-3">•</span>
                <span>Custom apps and websites, deployed and running in production</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-3">•</span>
                <span>Cognitive analysis across hundreds of documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-3">•</span>
                <span>Automated workflows that previously required multiple tools and manual steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-3">•</span>
                <span>Problem-solving flows that replace expensive consulting engagements</span>
              </li>
            </ul>

            <p className="text-center italic pt-6">
              "The future is already here. It just isn't evenly distributed yet."
              <span className="block text-small text-text-muted mt-2">— William Gibson</span>
            </p>

            <p>
              The question isn't whether this transformation is coming to your industry. It's whether you'll be among the first to capture the gains—or among the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
