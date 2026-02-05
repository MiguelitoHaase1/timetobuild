interface Partner {
  name: string
  url: string
  logo?: string // Optional: path to logo image
}

const partners: Partner[] = [
  { name: 'Claude Code', url: 'https://claude.ai/code', logo: '/logos/claude-code.png' },
  { name: 'Codex', url: 'https://openai.com/index/openai-codex/', logo: '/logos/codex.png' },
  { name: 'Obsidian', url: 'https://obsidian.md/', logo: '/logos/obsidian.png' },
  { name: 'Wispr Flow', url: 'https://www.wisprflow.com/' },
  { name: 'Kapa', url: 'https://www.kapa.ai/' },
  { name: 'AntiGravity', url: 'https://www.antigravity.com/', logo: '/logos/antigravity.png' },
  { name: 'Amp', url: 'https://www.withamp.com/' },
  { name: 'OpenCode', url: 'https://opencode.dev/' },
  { name: 'Cursor', url: 'https://www.cursor.com/' },
  { name: 'GitHub', url: 'https://github.com/', logo: '/logos/github.png' },
  { name: 'Granola', url: 'https://www.granola.so/' },
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
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling content - duplicate for seamless loop */}
        <div className="flex gap-4 animate-marquee">
          {/* First set */}
          {partners.map((partner, index) => (
            <a
              key={`first-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-cream-panel hover:border-coral hover:shadow-sm transition-all duration-200 group"
            >
              {partner.logo ? (
                <div className="flex items-center gap-2">
                  <img src={partner.logo} alt={partner.name} className="h-5 w-5 object-contain" />
                  <span className="text-xs font-medium text-text-secondary group-hover:text-coral transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-coral/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-coral">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-text-secondary group-hover:text-coral transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              )}
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <a
              key={`second-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-cream-panel hover:border-coral hover:shadow-sm transition-all duration-200 group"
            >
              {partner.logo ? (
                <div className="flex items-center gap-2">
                  <img src={partner.logo} alt={partner.name} className="h-5 w-5 object-contain" />
                  <span className="text-xs font-medium text-text-secondary group-hover:text-coral transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-coral/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-coral">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-text-secondary group-hover:text-coral transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
