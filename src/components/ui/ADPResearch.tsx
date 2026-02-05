import { SectionHeading } from './SectionHeading'

interface StatCardProps {
  label: string
  number: string
  description: string
  multiplier: number
  color: 'coral' | 'blue' | 'amber'
  animationDelay: number
}

function StatCard({ label, number, description, multiplier, color, animationDelay }: StatCardProps) {
  const colorClasses = {
    coral: {
      number: 'text-coral',
      dot: 'bg-coral',
      dotSoft: 'bg-coral/40',
      legendDot: 'bg-coral',
    },
    blue: {
      number: 'text-[#2563EB]',
      dot: 'bg-[#2563EB]',
      dotSoft: 'bg-[#BFDBFE]',
      legendDot: 'bg-[#2563EB]',
    },
    amber: {
      number: 'text-[#D97706]',
      dot: 'bg-[#D97706]',
      dotSoft: 'bg-[#FDE68A]',
      legendDot: 'bg-[#D97706]',
    },
  }

  const colors = colorClasses[color]
  const fullDots = Math.floor(multiplier)
  const hasPartial = multiplier % 1 !== 0

  return (
    <div
      className="bg-white rounded-[20px] p-8 md:p-9 shadow-subtle grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center opacity-0 translate-y-3 animate-fade-up"
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Left side */}
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium text-text-muted uppercase tracking-wider">{label}</div>
        <div className={`font-serif text-[56px] leading-none tracking-tight font-bold ${colors.number}`}>
          {number}
          <span className="text-4xl opacity-70">×</span>
        </div>
        <div className="text-base text-text-primary leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      {/* Right side - Visual multiplier */}
      <div className="flex flex-col items-center md:items-end gap-2 min-w-[140px]">
        <div className="flex flex-col gap-1.5">
          {/* Baseline row */}
          <div className="flex items-center gap-1 h-[22px]">
            <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wide w-[62px] text-right pr-2">
              Infrequent
            </div>
            <div className="flex gap-[3px] items-center">
              <div className="w-4 h-4 rounded bg-[#D1D5DB] animate-pop-in" style={{ animationDelay: `${animationDelay + 200}ms` }} />
            </div>
          </div>

          {/* Daily AI row */}
          <div className="flex items-center gap-1 h-[22px]">
            <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wide w-[62px] text-right pr-2">
              Daily AI
            </div>
            <div className="flex gap-[3px] items-center">
              {Array.from({ length: fullDots }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded ${colors.dot} animate-pop-in`}
                  style={{ animationDelay: `${animationDelay + 350 + i * 50}ms` }}
                />
              ))}
              {hasPartial && (
                <div
                  className={`w-4 h-4 rounded ${colors.dotSoft} animate-pop-in`}
                  style={{ animationDelay: `${animationDelay + 350 + fullDots * 50}ms` }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-3 mt-0.5">
          <div className="flex items-center gap-1 text-[9px] text-text-muted uppercase tracking-wide font-medium">
            <div className="w-2 h-2 rounded-sm bg-[#D1D5DB]" />
            1×
          </div>
          <div className="flex items-center gap-1 text-[9px] text-text-muted uppercase tracking-wide font-medium">
            <div className={`w-2 h-2 rounded-sm ${colors.legendDot}`} />
            {number}×
          </div>
        </div>
      </div>
    </div>
  )
}

export function ADPResearch() {
  return (
    <div className="max-w-[780px] mx-auto px-5 py-12">
      {/* Header */}
      <div className="text-center mb-13 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <SectionHeading level={2} centered className="mb-4">
          Daily AI users are <em className="italic text-coral">far more engaged</em> at work
        </SectionHeading>
        <p className="text-[15px] text-text-secondary max-w-[540px] mx-auto leading-relaxed">
          Frequent AI users don't just adopt technology — they report dramatically higher engagement, motivation, and optimism compared to their peers.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-6 mb-10">
        <StatCard
          label="Fully engaged at work"
          number="3"
          description="more likely to be <strong>fully engaged</strong> at work"
          multiplier={3}
          color="blue"
          animationDelay={300}
        />
        <StatCard
          label="Motivated & committed"
          number="3.4"
          description="more likely to be <strong>motivated and committed</strong> to their work"
          multiplier={3.4}
          color="coral"
          animationDelay={500}
        />
        <StatCard
          label="Believe AI will help them"
          number="5.4"
          description="more likely to believe <strong>AI will positively impact</strong> their job in the next year"
          multiplier={5.4}
          color="amber"
          animationDelay={700}
        />
      </div>

      {/* Source */}
      <div
        className="bg-white rounded-[14px] p-5 md:p-7 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 opacity-0 animate-fade-in"
        style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-sm font-semibold text-text-primary">ADP Research Institute</div>
          <div className="text-[13px] text-text-secondary">"Today at Work" — AI, Engagement & the Future of Work</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-coral/10 text-coral tracking-wide">Nov 2025</span>
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-cream-panel text-text-muted tracking-wide">
            n = 30,000+
          </span>
          <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#FEF3C7] text-[#D97706] tracking-wide">
            Daily vs. infrequent users
          </span>
        </div>
      </div>
    </div>
  )
}
