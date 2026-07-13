// components/BrokerComparison.tsx
'use client';

import { motion } from 'framer-motion';

const TRADITIONAL = [
  'Broker commission fees',
  'Waiting for callbacks and follow-ups',
  'Listings shown to everyone, not filtered locally',
  'Owner details hidden behind a middleman',
];

const HOMI = [
  'Zero commission — always free',
  'Message property owners directly',
  'Hyperlocal filtering by district & locality',
  'Verified owner contact via OTP login',
];

export function BrokerComparison() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Traditional way */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-3xl border border-dark/10 bg-surface p-8 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-dark/40">
            The old way
          </p>
          <h3 className="mt-2 text-2xl font-bold text-dark/70">Through a broker</h3>
          <ul className="mt-6 space-y-4">
            {TRADITIONAL.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-sm text-dark/50"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark/10 text-xs font-bold text-dark/40">
                  ✕
                </span>
                <span className="line-through decoration-dark/20">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* mobile-only VS divider */}
        <div className="flex justify-center lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-xs font-black text-white ring-4 ring-white">
            VS
          </div>
        </div>

        {/* Homi way */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-3xl bg-brand p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-dark/60">
            The Homi way
          </p>
          <h3 className="mt-2 text-2xl font-bold text-dark">Direct & free</h3>
          <ul className="mt-6 space-y-4">
            {HOMI.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-sm font-medium text-dark"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, type: 'spring', stiffness: 300 }}
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark text-xs font-bold text-white"
                >
                  ✓
                </motion.span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* VS badge — sits in the gap between cards, desktop only */}
      <motion.div
        initial={{ scale: 0, rotate: -8 }}
        whileInView={{ scale: 1, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.4 }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-xs font-black text-white shadow-lg ring-4 ring-white">
          VS
        </div>
      </motion.div>

    </div>
  );
}