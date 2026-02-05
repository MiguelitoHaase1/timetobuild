interface ADPResearchThumbnailProps {
  onClick: () => void
}

export function ADPResearchThumbnail({ onClick }: ADPResearchThumbnailProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Subtitle */}
      <p className="text-center text-base text-text-secondary mb-4">
        Frequent AI users have 3× higher engagement and motivation at work
      </p>

      {/* Clickable thumbnail */}
      <button
        onClick={onClick}
        className="w-full bg-white rounded-xl p-5 pb-3 shadow-subtle hover:shadow-lg transition-all duration-200 cursor-pointer group border-2 border-transparent hover:border-coral"
      >
        {/* Mini stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-3">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-[#2563EB] mb-1">3×</div>
            <div className="text-xs text-text-muted">Employee engagement</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-coral mb-1">3.4×</div>
            <div className="text-xs text-text-muted">Employee motivation</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-[#D97706] mb-1">5.4×</div>
            <div className="text-xs text-text-muted">Employee optimism</div>
          </div>
        </div>

        {/* Simple comparison label */}
        <div className="text-xs text-text-muted text-center mb-2">
          Daily AI users vs Infrequent users
        </div>

        {/* Source - distinct styling */}
        <div className="flex items-center justify-center gap-2 text-[10px] pt-2 border-t border-border-light">
          <span className="bg-cream-panel text-text-muted px-2 py-0.5 rounded">Source: ADP Research Institute</span>
          <span className="text-text-muted">Nov 2025</span>
          <span className="text-text-muted">•</span>
          <span className="text-text-muted">n=30,000+</span>
          <span className="text-coral font-medium opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
      </button>
    </div>
  )
}
