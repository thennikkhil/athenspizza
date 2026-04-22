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
          href="tel:+919896584492"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-bold             transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background: '#dc2626',
                fontFamily: "'Titan One', cursive",
                letterSpacing: '0.04em',
              }}
        >
          {/* WhatsApp icon */}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>  

          Contact Us
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
              href="tel:+919896584492"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-bold             transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background: '#dc2626',
                fontFamily: "'Titan One', cursive",
                letterSpacing: '0.04em',
              }}
            >
                Contact Us
          </a>
        </div>
      )}
    </div>
  );
}