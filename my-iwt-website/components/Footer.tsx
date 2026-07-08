import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-iwt-navy text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
          <Image
            src="/salvation-army-logo.svg"
            alt="The Salvation Army"
            width={56}
            height={66}
            className="shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-iwt-gold font-bold text-lg">The Salvation Army</p>
            <p className="text-white/80 text-sm mt-1">Indian Western Territory</p>
            <p className="mt-3 text-white/60 text-sm max-w-md">
              Contact details: Heart to God, Hand to Man — serving Maharashtra &amp; Gujarat with love since inception.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2026 The Salvation Army IWT. All rights reserved.</p>
          <Link href="/donation" className="text-iwt-gold hover:text-white transition-colors font-semibold">
            Support our mission →
          </Link>
        </div>
      </div>
    </footer>
  );
}
