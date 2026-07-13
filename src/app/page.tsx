"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { SectionHeader } from "@/components/SectionHeader";
import { HeroMockup } from "@/components/HeroMockup";
import { DecorativeBlob } from "@/components/DecorativeBlob";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/motion/FadeIn";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import {
  SITE,
  TRANSACTION_TYPES,
} from "@/lib/site";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { BrokerComparison } from "@/components/BrokerComparision";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-brand pt-28 sm:pt-32 lg:pt-36">
        <DecorativeBlob
          className="-left-24 -top-24 h-72 w-72 bg-white/30"
          duration={14}
        />
        <DecorativeBlob
          className="-right-16 top-1/3 h-96 w-96 bg-dark/10"
          duration={18}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        <div className="section-container relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dark shadow-sm backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Live in Kerala
            </motion.p>

            <h1 className="heading-xxl overflow-hidden text-dark">
              {["Find Your", "Dream Property", "Effortlessly"].map(
                (line, i) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.12,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="block"
                  >
                    {line === "Dream Property" ? (
                      <span className="relative inline-block">
                        {line}
                        <svg
                          className="absolute -bottom-2 left-0 w-full text-dark/20"
                          viewBox="0 0 200 8"
                          fill="none"
                          aria-hidden
                        >
                          <motion.path
                            d="M2 6c40-6 120-6 196 0"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                          />
                        </svg>
                      </span>
                    ) : (
                      line
                    )}
                  </motion.span>
                ),
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="body-lg mt-6 max-w-lg text-dark/80"
            >
              {SITE.name} is a hyperlocal marketplace for Kerala. Browse land,
              homes, commercial spaces, and hospitality listings in Malappuram,
              Kozhikode, Wayanad, and beyond — free to use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <PlayStoreButton />
              <Link
                href="/features/"
                className="btn-outline border-dark text-dark hover:bg-dark/5"
              >
                See features
              </Link>
            </motion.div>

            <FadeInStagger
              className="mt-8 flex flex-wrap gap-2"
              staggerDelay={0.06}
            >
              {TRANSACTION_TYPES.map((type) => (
                <motion.span
                  key={type}
                  variants={staggerItem}
                  className="rounded-pill bg-white/70 px-4 py-1.5 text-xs font-semibold text-dark shadow-sm backdrop-blur-sm"
                >
                  {type}
                </motion.span>
              ))}
            </FadeInStagger>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-dark/10 pt-6 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4"
            >
              {[
                { value: 3, label: "Districts covered" },
                { value: 4, label: "Property types" },
                { value: 100, label: "Free to use", suffix: "%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-dark sm:text-2xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-dark/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 hidden lg:order-2 lg:block">
            <HeroMockup />
          </div>
        </div>
      </section>

     {/* Property categories */}
<section className="section-padding relative bg-white">
  {/* Blob is clipped inside its own wrapper so it doesn't affect card overflow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <DecorativeBlob
      className="left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand/20"
      duration={16}
    />
  </div>
  <div className="section-container relative">
    <FadeIn>
      <SectionHeader
        eyebrow="Property types"
        title="Every kind of Kerala property, one app"
        description="Not just houses — land, commercial buildings, and hospitality too."
      />
    </FadeIn>
    <div className="mt-12">
      <CategoryShowcase />
    </div>
  </div>
</section>

     {/* How it works */}
<section className="section-padding relative overflow-hidden bg-surface">
  <div className="section-container">
    <FadeIn>
      <SectionHeader
        eyebrow="How it works"
        title="From search to move-in, in four steps"
        description="No agents, no runaround — just you and the property owner."
      />
    </FadeIn>
    <div className="mt-16">
      <HowItWorks />
    </div>
  </div>
</section>

{/* No brokers comparison */}
<section className="section-padding relative overflow-hidden bg-white">
  <div className="section-container">
    <FadeIn>
      <SectionHeader
        eyebrow="Why Homi"
        title="Cut out the middleman entirely"
        description="Same property search, none of the broker fees or delays."
      />
    </FadeIn>
    <div className="mt-14">
      <BrokerComparison />
    </div>
  </div>
</section>



      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden bg-dark text-white">
        <DecorativeBlob
          className="-left-20 top-0 h-80 w-80 bg-brand/20"
          duration={14}
        />
        <DecorativeBlob
          className="-right-20 bottom-0 h-80 w-80 bg-white/10"
          duration={18}
        />
        <FadeIn className="section-container relative text-center">
          <h2 className="heading-lg text-white">
            Ready to explore Kerala property?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Download Homi on Google Play. Browse, search, list, and connect —
            completely free.
          </p>
          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={SITE.playStoreUrl}
                className="btn-brand gap-2 px-8 py-4 text-base shadow-xl shadow-brand/20"
                aria-label="Download Homi on Google Play Store"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 0 1-.61-.92V2.734a1.006 1.006 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 0 1 0 1.738l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                Download on Play Store
              </Link>
            </motion.div>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Currently in closed testing on Google Play
          </p>
        </FadeIn>
      </section>
    </>
  );
}
