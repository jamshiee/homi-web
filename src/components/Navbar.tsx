'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';
import { PlayStoreButton } from './PlayStoreButton';
import { NavPillLink } from './NavPillLink';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-full">
        {/* glass base */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-xl backdrop-saturate-150" />
        {/* top highlight sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-transparent" />

        {/* actual bar content */}
        <div
          className="relative flex items-center justify-between gap-4 rounded-full border border-white/30 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] sm:px-5"
        >
          <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/images/brand/homi-side-trans.webp"
              alt={`${SITE.name} logo`}
              width={80}
              height={80}
              className="h-auto w-24"
              priority
            />
            {/* <span className="hidden text-base font-bold text-dark sm:inline">{SITE.name}</span> */}
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavPillLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <PlayStoreButton size="sm" className="hidden sm:inline-flex" />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/30 text-dark backdrop-blur-md lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl lg:hidden">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl backdrop-saturate-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-transparent" />
          <nav
            className="relative rounded-3xl border border-white/30 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)]"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-dark hover:bg-white/40"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 sm:hidden">
                <PlayStoreButton size="sm" className="w-full" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}