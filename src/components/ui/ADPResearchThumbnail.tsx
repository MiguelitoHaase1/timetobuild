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
        className="w-full bg-white rounded-xl p-6 shadow-subtle hover:shadow-lg transition-all duration-200 cursor-pointer group border-2 border-transparent hover:border-coral"
      >
        {/* Mini stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-[#2563EB] mb-1">3×</div>
            <div className="text-xs text-text-muted">Fully engaged</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-coral mb-1">3.4×</div>
            <div className="text-xs text-text-muted">Motivated</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-[#D97706] mb-1">5.4×</div>
            <div className="text-xs text-text-muted">Optimistic</div>
          </div>
        </div>

        {/* Simple comparison label */}
        <div className="text-xs text-text-muted text-center mb-3">
          Daily AI users vs Infrequent users
        </div>

        {/* Source */}
        <div className="text-xs text-text-muted text-center pt-3 border-t border-border-light">
          ADP Research Institute, November 2025 (n=30,000+)
        </div>

        {/* Click to expand hint */}
        <div className="text-xs text-coral font-medium text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to view detailed breakdown →
        </div>
      </button>
    </div>
  )
}
