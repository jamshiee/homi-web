'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open ? 'border-brand bg-white shadow-lg shadow-brand/5' : 'border-border bg-surface hover:border-brand/30 hover:bg-white hover:shadow-md'
      }`}
    >
      <button
        type="button"
        className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`font-semibold transition-colors duration-300 ${open ? 'text-brand' : 'text-dark group-hover:text-brand'}`}>
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? 'bg-brand text-dark rotate-180' : 'bg-dark/5 text-dark/50 group-hover:bg-brand/10 group-hover:text-brand'
          }`}
          aria-hidden
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted pr-14">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
