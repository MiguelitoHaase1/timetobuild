export function Opening() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/before.jpeg)',
          backgroundPosition: 'center center',
        }}
      />

      {/* Subtle overlay for text readability while keeping image visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-center leading-tight drop-shadow-2xl">
          Does your AI tools empower your employees?
        </h1>
      </div>
    </section>
  )
}
