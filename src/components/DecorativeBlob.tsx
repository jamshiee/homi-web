'use client';

import { motion } from 'framer-motion';

export function DecorativeBlob({
  className = '',
  duration = 12,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{
        x: [0, 20, -10, 0],
        y: [0, -20, 10, 0],
        scale: [1, 1.08, 0.96, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    />
  );
}