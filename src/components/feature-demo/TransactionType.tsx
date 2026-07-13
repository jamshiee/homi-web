"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Reuse the same pill-toggle component, just swap the array + label:
const TRANSACTION_TYPES = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Lease", value: "lease" },
];

// Fake result counts per type, just for the demo
const COUNTS: Record<string, number> = {
  buy: 82,
  rent: 39,
  lease: 7,
};

export function TransactionTypeDemo() {
  const [active, setActive] = useState("buy");

  return (
    <div className="w-full rounded-3xl border border-border bg-white p-4 shadow-lg">
      {/* Fake search bar — non-interactive on purpose, just sets the scene */}
      <div className="mb-4 flex h-12 items-center rounded-pill border border-border bg-surface px-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2 shrink-0 text-dark/40">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-dark/40">Search locality, area…</span>
      </div>

      {/* Pill row */}
      <div className="flex flex-wrap gap-2">
        {TRANSACTION_TYPES.map((type) => {
          const isActive = active === type.value;
          return (
            <button
              key={type.value}
              onClick={() => setActive(type.value)}
              className={`relative rounded-pill border px-3.5 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-dark bg-brand text-dark"
                  : "border-border bg-white text-dark/60"
              }`}
            >
              {type.label}
            </button>
          );
        })}
      </div>

      {/* Live-updating result counter */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5"
      >
        <span className="text-sm font-bold text-dark">{COUNTS[active]}</span>
        <span className="text-sm text-dark/60">
          properties found
        </span>
      </motion.div>
    </div>
  );
}