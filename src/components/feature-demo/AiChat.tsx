// components/feature-demos/AIChatDemo.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCRIPT = [
  { role: "user", text: "How do I post my land for sale?" },
  { role: "assistant", text: "Tap the + button on the home screen, choose 'Land / Plot', and fill in location, price, and photos. It goes live after a quick review." },
  { role: "user", text: "Can buyers see my phone number right away?" },
  { role: "assistant", text: "Only if they tap 'View Number' — you can also just let them WhatsApp you first." },
] as const;

export function AIChatDemo() {
  const [step, setStep] = useState(0); // how many messages shown
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function play() {
      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        if (SCRIPT[i].role === "assistant") {
          setTyping(true);
          await wait(1100);
          if (cancelled) return;
          setTyping(false);
        } else {
          await wait(900);
        }
        setStep(i + 1);
        await wait(SCRIPT[i].role === "user" ? 300 : 1600);
      }
      await wait(2000);
      if (!cancelled) setStep(0); // loop
    }
    play();
    return () => { cancelled = true; };
  }, [step === 0]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [step, typing]);

  return (
    <div className="flex h-[420px] w-full flex-col rounded-3xl border border-border bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="text-brand">✦</span>
        <span className="text-sm font-bold text-dark">Homi Assistant</span>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-hidden px-4 py-4">
        <AnimatePresence initial={false}>
          {SCRIPT.slice(0, step).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                  msg.role === "user"
                    ? "rounded-br-sm bg-dark text-white"
                    : "rounded-bl-sm border border-border bg-surface text-dark"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-border bg-surface px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-dark/40"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: d * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}