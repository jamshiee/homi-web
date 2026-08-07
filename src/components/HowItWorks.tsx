// components/HowItWorks.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    title: 'Browse listings',
    description: 'Filter by district, locality, and type — see what\'s near you.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="7" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    title: 'Message the owner',
    description: 'Reach property owners directly — no broker, no fees.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Close the deal',
    description: 'Negotiate and finalize on your terms, completely free.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop: animated progress line sitting at icon center (top-7 = half of h-14) */}
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
      <motion.div
        style={{ width: lineWidth }}
        className="absolute left-0 top-7 hidden h-px bg-dark/40 lg:block"
      />

      {/* Mobile: single column card list / Desktop: 3-col horizontal */}
      <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-6">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Mobile card — compact horizontal layout / Desktop — centered column */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md lg:flex-col lg:items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none lg:hover:shadow-none">
              {/* Icon */}
              <div className="relative shrink-0 lg:mb-5">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-dark shadow-sm"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Text */}
              <div className="lg:mt-0">
                <h3 className="text-sm font-bold text-dark sm:text-base">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}