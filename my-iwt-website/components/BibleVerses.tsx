'use client';

import { useEffect, useState } from 'react';

const verses = [
  {
    text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.',
    reference: 'Micah 6:8',
  },
  {
    text: 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.',
    reference: 'Matthew 25:40',
  },
  {
    text: 'Let us not love with words or speech but with actions and in truth.',
    reference: '1 John 3:18',
  },
  {
    text: 'The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.',
    reference: 'Isaiah 61:1',
  },
];

export default function BibleVerses() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % verses.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const activeVerse = verses[activeIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-iwt-gold/20 text-iwt-navy text-sm font-semibold tracking-wide">
            Scripture that moves us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-iwt-navy font-display">
            Words we live by
          </h2>
        </div>

        <div
          key={activeIndex}
          className="relative overflow-hidden rounded-3xl bg-iwt-navy p-8 sm:p-12 shadow-xl"
          style={{ animation: 'verse-in 0.6s ease-out both' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-iwt-gold/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-iwt-red/20 rounded-full blur-2xl animate-float-delay" />

          <span className="text-6xl text-iwt-gold/30 font-serif leading-none select-none" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="relative -mt-6 text-lg sm:text-xl text-white/95 leading-relaxed font-medium">
            {activeVerse.text}
          </blockquote>
          <cite className="mt-6 block not-italic text-iwt-gold font-bold text-base sm:text-lg">
            — {activeVerse.reference}
          </cite>

          <div className="mt-8 flex gap-2 justify-center">
            {verses.map((verse, index) => (
              <button
                key={verse.reference}
                type="button"
                aria-label={`Show verse ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-iwt-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
