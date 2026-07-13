// components/feature-demos/LocalitySearchDemo.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Fake but realistic Malabar locality data
const LOCALITIES = [
  { name: "Kozhikode Beach", district: "Kozhikode", count: 18 },
  { name: "Koyilandy", district: "Kozhikode", count: 6 },
  { name: "Kondotty", district: "Malappuram", count: 4 },
  { name: "Kalpetta", district: "Wayanad", count: 9 },
  { name: "Manjeri", district: "Malappuram", count: 11 },
  { name: "Vythiri", district: "Wayanad", count: 3 },
];

// Scripted typing sequence: types a locality with NO listings,
// to demonstrate the "falls back to district" behavior
const SCRIPT_TEXT = "Koyilandy";
const NO_MATCH_LOCALITY = "Koyilandy"; // pretend this has 0 listings
const FALLBACK_DISTRICT = "Kozhikode";
const FALLBACK_COUNT = 24;

export function LocalitySearchDemo() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "suggestions" | "noMatch" | "reset">("typing");
  const suggestions = LOCALITIES.filter((l) =>
    l.name.toLowerCase().startsWith(typed.toLowerCase())
  );

  useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        setPhase("typing");
        setTyped("");
        for (let i = 1; i <= SCRIPT_TEXT.length; i++) {
          if (cancelled) return;
          setTyped(SCRIPT_TEXT.slice(0, i));
          await wait(90);
        }
        await wait(400);
        if (cancelled) return;
        setPhase("suggestions");
        await wait(1400);
        if (cancelled) return;
        setPhase("noMatch");
        await wait(2600);
        if (cancelled) return;
        setPhase("reset");
        await wait(1200);
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="w-full rounded-3xl border border-border bg-white p-4 shadow-lg">
      {/* Search input */}
      <div className="relative flex h-12 items-center rounded-pill border border-border bg-surface px-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2 shrink-0 text-dark/40">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-dark">
          {typed}
          {phase === "typing" && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="ml-0.5 inline-block w-[1px] bg-dark"
            >
              |
            </motion.span>
          )}
        </span>
      </div>

      {/* Autocomplete dropdown */}
      <AnimatePresence mode="wait">
        {phase === "suggestions" && (
          <motion.div
            key="suggestions"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-2 overflow-hidden rounded-2xl border border-border"
          >
            {suggestions.map((s) => (
              <div key={s.name} className="flex items-center justify-between border-b border-border px-4 py-2.5 last:border-0">
                <div>
                  <p className="text-sm font-semibold text-dark">{s.name}</p>
                  <p className="text-xs text-dark/50">{s.district} district</p>
                </div>
                <span className="text-xs font-bold text-dark/40">{s.count}</span>
              </div>
            ))}
          </motion.div>
        )}

        {phase === "noMatch" && (
          <motion.div
            key="noMatch"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3"
          >
            <div className="my-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-dark/50">No results in {NO_MATCH_LOCALITY}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5">
              <span className="text-sm">🗺️</span>
              <span className="text-sm font-semibold text-dark">
                Showing nearby in {FALLBACK_DISTRICT}
              </span>
              <span className="ml-auto text-xs font-bold text-dark/40">{FALLBACK_COUNT}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}