"use client"
import { SectionHeader } from '@/components/SectionHeader';
import { FEATURES } from '@/lib/site';
import { DecorativeBlob } from '@/components/DecorativeBlob';
import { FadeIn } from '@/components/motion/FadeIn';
import { InViewMount } from '@/components/feature-demo/InViewMount';
import { motion } from 'framer-motion';

export default function FeaturesPage() {
  return (
    <>
      <section className="section-padding relative overflow-hidden bg-surface">
        <DecorativeBlob className="-right-24 -top-24 h-72 w-72 bg-brand/15" duration={16} />
        <div className="section-container relative">
          <FadeIn>
            <SectionHeader
              eyebrow="Features"
              title="Everything you need to find or list property in Kerala"
              description="Simple tools for seekers and owners — designed around how Kerala actually works."
            />
          </FadeIn>
        </div>
      </section>

      <div>
        {FEATURES.map((feature, index) => {
          const reversed = index % 2 === 1;
          const tinted = index % 2 === 1;
          const Demo = feature.component;

          return (
            <section
              key={feature.title}
              className={`section-padding relative overflow-hidden ${tinted ? 'bg-surface' : 'bg-white'}`}
            >
              <div
                className={`section-container grid items-center gap-12 lg:grid-cols-2 ${reversed ? 'lg:[direction:rtl]' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={reversed ? 'lg:[direction:ltr]' : ''}
                >
                  <div className="mx-auto w-full max-w-sm">
                    <InViewMount>
                      <Demo />
                    </InViewMount>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={reversed ? 'lg:[direction:ltr]' : ''}
                >
                  <span className="inline-flex items-center gap-2 rounded-pill bg-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-dark/70">
                    Feature {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="heading-md mt-4 text-dark">{feature.title}</h2>
                  <p className="body-lg mt-4">{feature.description}</p>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}