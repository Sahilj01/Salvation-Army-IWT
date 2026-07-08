'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'Our Leaders', href: '/our-leaders' },
  { name: 'Trade', href: '/trade' },
  { name: 'Annual Report', href: '/annual-report' },
  { name: 'History', href: '/history' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-iwt-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-2 focus:outline-iwt-gold rounded-lg p-1"
          >
            <Image
              src="/salvation-army-logo.svg"
              alt="The Salvation Army"
              width={40}
              height={47}
              className="shrink-0"
            />
            <span className="hidden sm:block">
              <span className="font-bold text-base text-white leading-tight block">
                Salvation Army
              </span>
              <span className="text-iwt-gold text-[11px] font-semibold tracking-wider uppercase">
                Indian Western Territory
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold px-3 py-2 rounded-xl transition-all duration-200 focus:outline-2 focus:outline-iwt-gold ${
                    isActive
                      ? 'text-iwt-gold bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/donation"
              className="ml-3 bg-iwt-red hover:bg-iwt-red/90 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-iwt-red/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-white hover:bg-white/10 min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 py-4 space-y-1 bg-iwt-navy">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold px-4 py-3 rounded-xl hover:bg-white/10 text-white/90"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donation"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-iwt-red text-white font-bold py-3.5 rounded-xl mt-3"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
