'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Franchise', href: '/franchise' },
];
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Athens Pizza Home"
        >
          {/* Logo circle badge */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#1e3a8a' }}
          >
            <Image
  src="/images/logo.png"
  alt="Athens Pizza Logo"
  width={28}
  height={28}
  className="object-contain"
/>
          </div>

          {/* Brand name */}
          <span
            className="text-2xl leading-none"
            style={{
              fontFamily: "'Titan One', cursive",
              color: '#1e3a8a',
              letterSpacing: '0.02em',
            }}
          >
            Athens<span style={{ color: '#dc2626' }}>Pizza</span>
          </span>
        </Link>

        {/* ── NAV LINKS (center) ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold tracking-wide transition-colors duration-150 group"
              style={{
                fontFamily: "'Titan One', cursive",
                color: isActive(link.href) ? '#1e3a8a' : '#4b5563',
                letterSpacing: '0.05em',
              }}
            >
              {link.label}
              {/* Active / hover underline */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-200"
                style={{
                  backgroundColor: '#dc2626',
                  width: isActive(link.href) ? '100%' : '0%',
                }}
              />
              <span
                className="absolute -bottom-1 left-0 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-200"
                style={{ backgroundColor: '#dc2626' }}
              />
            </Link>
          ))}
        </nav>

        {/* ── CTA BUTTON ── */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Athens%20Pizza%2C%20I%27d%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-bold transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
          style={{
            background: '#dc2626',
            fontFamily: "'Titan One', cursive",
            letterSpacing: '0.04em',
          }}
        >
          {/* WhatsApp icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.98l6.306-1.653A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.72.976.993-3.624-.234-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Order Now
        </a>

        {/* ── MOBILE HAMBURGER ── */}
        <MobileMenu navLinks={navLinks} pathname={pathname} />
      </div>
    </header>
  );
}

function MobileMenu({
  navLinks,
  pathname,
}: {
  navLinks: { label: string; href: string }[];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden relative">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <span className="block w-5 h-0.5 rounded-full" style={{ background: '#1e3a8a' }} />
        <span className="block w-5 h-0.5 rounded-full" style={{ background: '#1e3a8a' }} />
        <span className="block w-4 h-0.5 rounded-full" style={{ background: '#1e3a8a' }} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 top-12 w-48 rounded-xl border border-gray-100 shadow-xl overflow-hidden z-50"
          style={{ background: '#f8fafc' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-sm font-semibold border-b border-gray-100 last:border-0 transition-colors"
              style={{
                fontFamily: "'Titan One', cursive",
                color: pathname === link.href ? '#dc2626' : '#1e3a8a',
                background: pathname === link.href ? '#fef2f2' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-5 py-3 text-sm font-bold text-white text-center"
            style={{ background: '#dc2626', fontFamily: "'Titan One', cursive" }}
          >
            Order Now
          </a>
        </div>
      )}
    </div>
  );
}