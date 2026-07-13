'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPERTY_CATEGORIES } from '@/lib/site';

// Per-category accent — adjust keys to match your actual category titles
const CATEGORY_STYLE: Record<string, { gradient: string; tags: string[] }> = {
  'Land / Plot': {
    gradient: 'from-lime-100 via-white to-white',
    tags: ['Residential plots', 'Agricultural land', 'Commercial land'],
  },
  'House / Villa': {
    gradient: 'from-amber-100 via-white to-white',
    tags: ['Independent house', 'Villa', 'Apartment'],
  },
  'Building / Commercial': {
    gradient: 'from-orange-100 via-white to-white',
    tags: ['Office space', 'Shops', 'Warehouses'],
  },
  'Hotel / Lodge / PG': {
    gradient: 'from-yellow-100 via-white to-white',
    tags: ['Hotels', 'Lodges', 'PG accommodation'],
  },
};

const FAN_OFFSETS = [
  { rotate: -6, x: -18, y: 8 },
  { rotate: -2, x: -6, y: 3 },
  { rotate: 2, x: 6, y: 3 },
  { rotate: 6, x: 18, y: 8 },
];

function CategoryCardRich({ cat, isActive }: { cat: (typeof PROPERTY_CATEGORIES)[number]; isActive: boolean }) {
  const style = CATEGORY_STYLE[cat.title] ?? { gradient: 'from-brand/20 via-white to-white', tags: [] };

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-4 sm:p-6 ${style.gradient}`}
    >
      {/* large watermark icon filling the void */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 text-[10rem] leading-none opacity-[0.06]" aria-hidden>
        {cat.icon ?? '🏠'}
      </div>

      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-2xl shadow-sm">
        {cat.icon ?? '🏠'}
      </div>

      <h3 className="relative mt-4 text-xl font-bold text-dark">{cat.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{cat.description}</p>

      {/* fills the middle space with relevant tags instead of leaving it blank */}
      {style.tags.length > 0 && (
        <div className="relative mt-3 hidden flex-wrap gap-2 sm:flex">
          {style.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-dark/10 bg-white/70 px-3 py-1 text-xs font-medium text-dark/70 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* pinned footer, always at the bottom regardless of content length */}
      <div className="relative mt-auto flex items-center justify-between pt-3 sm:pt-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-dark/40">
          Available now
        </span>
        <motion.span
          animate={{ x: isActive ? 4 : 0 }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-dark text-sm text-white sm:h-8 sm:w-8"
        >
          →
        </motion.span>
      </div>
    </div>
  );
}

export function CategoryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % PROPERTY_CATEGORIES.length);
    }, 3200);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div
      className="relative z-0 grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left: fanned card deck */}
      <div
        className="relative mx-auto mt-6 h-[300px] w-[85%] max-w-[280px] sm:h-[320px] sm:max-w-xs lg:mt-0 lg:mx-0 lg:max-w-sm lg:h-[360px]"
        onClick={() => setActiveIndex((i) => (i + 1) % PROPERTY_CATEGORIES.length)}
      >
        {PROPERTY_CATEGORIES.map((cat, i) => {
          const isActive = i === activeIndex;
          const fan = FAN_OFFSETS[i % FAN_OFFSETS.length];

          return (
            <motion.div
              key={cat.title}
              className="absolute inset-0 cursor-pointer"
              style={{ zIndex: isActive ? 50 : 10 + i }}
              onMouseEnter={() => setActiveIndex(i)}
              animate={
                isActive
                  ? { rotate: 0, x: 0, y: -12, scale: 1.04 }
                  : { rotate: fan.rotate, x: fan.x, y: fan.y, scale: 0.93 }
              }
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div
                className={`h-full w-full transition-shadow duration-300 ${
                  isActive
                    ? 'shadow-[0_20px_60px_rgba(0,0,0,0.18)]'
                    : 'shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                } rounded-3xl`}
                style={{ filter: isActive ? 'none' : 'saturate(0.85) brightness(0.97)' }}
              >
                <CategoryCardRich cat={cat} isActive={isActive} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right: category reader */}
      <div className="px-1">
        <ul className="space-y-1">
          {PROPERTY_CATEGORIES.map((cat, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={cat.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors ${
                    isActive ? 'bg-brand' : 'bg-transparent'
                  }`}
                >
                  <span className={`text-xs font-bold tabular-nums transition-colors ${isActive ? 'text-dark' : 'text-dark/30'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-lg font-bold transition-colors ${
                      isActive ? 'text-dark' : 'text-dark/50 group-hover:text-dark/80'
                    }`}
                  >
                    {cat.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative mt-6 min-h-[64px] px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-sm leading-relaxed text-muted"
            >
              {PROPERTY_CATEGORIES[activeIndex].description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-1.5 px-4">
          {PROPERTY_CATEGORIES.map((cat, i) => (
            <span
              key={cat.title}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-dark' : 'w-3 bg-dark/15'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}