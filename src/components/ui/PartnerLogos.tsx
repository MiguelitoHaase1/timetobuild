const partners = [
  'Claude Code',
  'Codex',
  'Obsidian',
  'Wispr Flow',
  'Kapa',
  'AntiGravity',
  'Amp',
  'OpenCode',
  'Cursor',
  'GitHub',
  'Granola',
]

export function PartnerLogos() {
  return (
    <div className="mt-4 pt-4 border-t border-cream-panel">
      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 text-center">
        Collaboration Partners
      </p>

      {/* Marquee container with overflow hidden */}
      <div className="relative overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling content - duplicate for seamless loop */}
        <div className="flex gap-6 animate-marquee">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-3 py-1.5 bg-cream-panel rounded-md text-xs font-medium text-text-secondary whitespace-nowrap"
            >
              {partner}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-3 py-1.5 bg-cream-panel rounded-md text-xs font-medium text-text-secondary whitespace-nowrap"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
