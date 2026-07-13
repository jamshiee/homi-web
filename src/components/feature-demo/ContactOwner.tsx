// components/feature-demos/ContactOwnerDemo.tsx
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ContactOwnerDemo() {
  const [sheet, setSheet] = useState<"closed" | "contact" | "number">("closed");

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
      {/* Mock property snippet */}
      <div className="border-b border-border p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-dark/50">Kozhikode • For Sale</p>
        <p className="mt-1 text-lg font-bold text-dark">3BHK Villa — ₹68,00,000</p>
      </div>
      <div className="h-40 bg-surface" />

      {/* Sticky bar */}
      <div className="border-t border-border p-4">
        <button
          onClick={() => setSheet("contact")}
          className="w-full rounded-pill bg-brand py-3 text-sm font-bold text-dark"
        >
          Contact Owner
        </button>
      </div>

      {/* Overlay + sheet */}
      <AnimatePresence>
        {sheet !== "closed" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-end bg-black/50"
            onClick={() => setSheet("closed")}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full rounded-t-3xl bg-white p-6"
            >
              <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border" />

              {sheet === "contact" && (
                <>
                  <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-sm font-bold text-white">
                    WhatsApp Chat
                  </button>
                  <button
                    onClick={() => setSheet("number")}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dark py-3.5 text-sm font-bold text-dark"
                  >
                    View Number
                  </button>
                  <p className="mt-4 text-center text-xs text-dark/50">No middlemen. Talk to the owner directly.</p>
                </>
              )}

              {sheet === "number" && (
                <div className="text-center">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-dark/50">Contact Number</p>
                  <p className="mb-5 text-3xl font-bold text-dark">+91 98470 XXXXX</p>
                  <div className="flex gap-3">
                    <button className="h-12 flex-1 rounded-pill border-[1.5px] border-dark text-sm font-bold text-dark">Copy</button>
                    <button className="h-12 flex-1 rounded-pill bg-dark text-sm font-bold text-white">Call Now</button>
                  </div>
                  <p className="mt-4 text-xs font-medium text-green-600">✓ Verified listing</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}