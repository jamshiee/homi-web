import type { Metadata } from 'next';
import Link from 'next/link';
import { PlayStoreButton } from '@/components/PlayStoreButton';
import { SectionHeader } from '@/components/SectionHeader';
import { DecorativeBlob } from '@/components/DecorativeBlob';
import { FadeIn, FadeInStagger, StaggeredItem } from '@/components/motion/FadeIn';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Homi exists to bring hyperlocal trust to Kerala real estate — filling the gap that generic pan-India apps leave behind.',
  path: '/about/',
});

const VALUES = [
  {
    title: 'Hyperlocal first',
    body: 'Property in Kerala is deeply local — district, panchayat, and neighbourhood all matter. Homi is built around that reality, not a one-size-fits-all India map.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Trust through transparency',
    body: 'Contact owners directly. See real photos, real prices, and real locations. No opaque broker layers or misleading listings.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Every property type',
    body: "Land, houses, commercial buildings, hotels, lodges, and PGs — Kerala's property market is diverse, and Homi reflects that.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Free for everyone',
    body: "No subscription tiers, no listing fees. Whether you're searching for a plot in Wayanad or listing a shop in Kozhikode, Homi is free.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-brand pt-28 sm:pt-32 lg:pt-36">
        <DecorativeBlob className="-left-24 -top-24 h-72 w-72 bg-white/30" duration={14} />
        <DecorativeBlob className="-right-16 top-1/3 h-96 w-96 bg-dark/10" duration={18} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          aria-hidden
        />
        <div className="section-container relative">
          <FadeIn>
            <SectionHeader
              align="left"
              eyebrow="About Homi"
              title="Real estate that understands Kerala"
              description="Generic apps treat Kerala like any other pin code. Homi is different — built by Homi Holdings for the way people actually buy, rent, and lease property here."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {['3 Districts', '4 Property Types', '100% Free', 'Kerala-first'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-dark shadow-sm backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Homi exists */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg text-dark">Why Homi exists</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Kerala&apos;s property market doesn&apos;t fit neatly into national real estate platforms.
                A family looking for agricultural land in Malappuram has different needs than someone
                searching for a PG near Kozhikode city, or a resort investor in Wayanad.
              </p>
              <p>
                Most apps optimize for metros and apartments. They miss the local nuance — the
                importance of district boundaries, the mix of land and hospitality listings, and the
                preference for direct owner contact over anonymous lead forms.
              </p>
              <p>
                Homi fills that gap. We started with a simple idea: a trustworthy, mobile-first
                marketplace where Kerala residents can discover and list every kind of property in
                their own districts — with moderation to keep quality high and an AI assistant to
                help anyone get started.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="What we stand for"
              description="Four principles that guide every product decision."
            />
          </FadeIn>
          <FadeInStagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6" staggerDelay={0.08}>
            {VALUES.map((value) => (
              <StaggeredItem key={value.title}>
                <article className="flex gap-4 rounded-2xl border border-border bg-white p-5 sm:p-6 transition-shadow hover:shadow-md">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-dark">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-dark sm:text-base">{value.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{value.body}</p>
                  </div>
                </article>
              </StaggeredItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="heading-md text-dark">Operated by Homi Holdings</h2>
            <p className="body-lg mx-auto mt-4 max-w-xl">
              Homi is currently in closed testing on Google Play. We&apos;re growing district by district
              across Kerala.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PlayStoreButton />
              <Link href="/contact/" className="btn-outline">
                Contact us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}




