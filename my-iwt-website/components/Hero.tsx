import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  {
    title: 'Support Our Cause',
    emoji: '❤️',
    accent: 'text-iwt-red',
    description: 'Fuel medical, disaster relief, and education missions across our territory.',
    href: '/donation',
    cta: 'Make a Donation',
  },
  {
    title: 'IWT Trade Store',
    emoji: '👕',
    accent: 'text-iwt-gold',
    description: 'Uniforms, songbooks, and study materials — all in one place.',
    href: '/trade',
    cta: 'Browse Materials',
  },
  {
    title: 'Ongoing Work',
    emoji: '📍',
    accent: 'text-iwt-navy',
    description: 'Community centers, schools, and programs near you.',
    href: '/our-work',
    cta: 'See Our Work',
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh-bg text-white px-4 sm:px-6 lg:px-8 pt-16 pb-32 sm:pt-20 sm:pb-36">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-16 right-[10%] w-40 h-40 rounded-full bg-iwt-gold/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-iwt-red/15 blur-3xl animate-float-delay pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center animate-fade-up">
          <Image
            src="/salvation-army-logo.svg"
            alt="The Salvation Army logo"
            width={88}
            height={102}
            priority
            className="mx-auto mb-6 drop-shadow-lg animate-float"
          />

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-semibold text-iwt-gold animate-shimmer">
            <span className="w-2 h-2 rounded-full bg-iwt-gold" />
            Indian Western Territory
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.1]">
            <span className="gradient-text">Heart to God,</span>
            <br />
            Hand to Man.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We&apos;re the Salvation Army crew serving Maharashtra &amp; Gujarat — showing up with
            love, action, and zero cap. Real faith. Real impact.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donation"
              className="inline-flex items-center justify-center gap-2 bg-iwt-red hover:bg-iwt-red/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-iwt-red/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/15 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-up-delay">
          {quickLinks.map((link) => (
            <article
              key={link.href}
              className="glass-panel rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className={`text-xl font-bold flex items-center gap-2 ${link.accent}`}>
                <span role="img" aria-hidden="true">{link.emoji}</span>
                {link.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{link.description}</p>
              <Link
                href={link.href}
                className="mt-5 inline-flex items-center gap-1 text-iwt-navy font-bold text-sm group-hover:gap-2 transition-all duration-300"
              >
                {link.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
