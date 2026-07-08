const pillars = [
  {
    title: 'Heart to God',
    emoji: '🙏',
    accent: 'border-iwt-gold',
    text: 'Rooted in worship, prayer, and a personal relationship with Jesus — the fire that fuels everything we do.',
  },
  {
    title: 'Hand to Man',
    emoji: '🤝',
    accent: 'border-iwt-red',
    text: 'Turning faith into action through food banks, shelters, schools, and disaster relief across our territory.',
  },
  {
    title: 'Hope for All',
    emoji: '✨',
    accent: 'border-iwt-navy',
    text: 'Meeting people exactly where they are — with dignity, compassion, and zero judgment.',
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-iwt-red/10 text-iwt-red text-sm font-semibold">
            Our mission
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-iwt-navy font-display tracking-tight">
            Heart to God,{' '}
            <span className="text-iwt-red">Hand to Man</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Salvation Army Indian Western Territory exists to share God&apos;s love through
            practical service — because real faith shows up for people, not just in words.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group rounded-2xl border-t-4 ${pillar.accent} bg-iwt-bg p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              style={{ animation: `fade-up 0.6s ease-out ${index * 0.1}s both` }}
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {pillar.emoji}
              </span>
              <h3 className="mt-4 text-xl font-bold text-iwt-navy">{pillar.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
