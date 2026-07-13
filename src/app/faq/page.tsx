import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqItem } from '@/components/FaqItem';
import { PlayStoreButton } from '@/components/PlayStoreButton';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQ_ITEMS } from '@/lib/site';
import { createPageMetadata } from '@/lib/metadata';
import { DecorativeBlob } from '@/components/DecorativeBlob';
import { FadeIn, FadeInStagger, StaggeredItem } from '@/components/motion/FadeIn';

export const metadata: Metadata = createPageMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about Homi — pricing, coverage areas, listing properties, phone OTP login, and supported property types.',
  path: '/faq/',
});

export default function FaqPage() {
  return (
    <>
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
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="section-container relative">
          <FadeIn>
            <SectionHeader
              eyebrow="Help"
              title="Frequently asked questions"
              description="Everything you need to know about using Homi in Kerala."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-white">
        <div className="section-container max-w-3xl">
          <FadeInStagger className="space-y-4" staggerDelay={0.05}>
            {FAQ_ITEMS.map((item) => (
              <StaggeredItem key={item.question}>
                <FaqItem question={item.question} answer={item.answer} />
              </StaggeredItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2} className="mt-16 rounded-3xl bg-surface p-8 text-center sm:p-12 relative overflow-hidden">
            <DecorativeBlob
              className="-left-16 -top-16 h-48 w-48 bg-brand/20"
              duration={12}
            />
            <div className="relative">
              <h2 className="heading-md text-dark">Still have questions?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted max-w-md mx-auto">
                Try the in-app AI assistant, or reach out to our team directly. We're here to help you get the most out of Homi.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PlayStoreButton />
                <Link href="/contact/" className="btn-outline border-dark text-dark transition-colors hover:bg-dark hover:text-white">
                  Contact support
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
