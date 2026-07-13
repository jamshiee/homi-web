import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import { SITE } from '@/lib/site';
import { createPageMetadata } from '@/lib/metadata';
import { DecorativeBlob } from '@/components/DecorativeBlob';
import { FadeIn, FadeInStagger, StaggeredItem } from '@/components/motion/FadeIn';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact & Support',
  description: 'Get in touch with the Homi team for support, feedback, or partnership inquiries.',
  path: '/contact/',
});

export default function ContactPage() {
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
              eyebrow="Support"
              title="Contact us"
              description="Questions about the app, listing approval, or partnerships? We're here to help."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-white">
        <div className="section-container grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="heading-md text-dark">Get in touch</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                For the fastest response, use the form or email us directly. We typically reply within
                1–2 business days.
              </p>
            </FadeIn>

            <FadeInStagger className="mt-8 space-y-6" staggerDelay={0.1}>
              <StaggeredItem className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-dark transition-colors">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="inline-flex items-center gap-2 font-medium text-brand hover:text-dark transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {SITE.contactEmail}
                  </a>
                </dd>
              </StaggeredItem>
              <StaggeredItem className="rounded-2xl border border-border bg-surface p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Company</dt>
                <dd className="mt-1 text-sm font-medium text-dark">{SITE.company}</dd>
              </StaggeredItem>
              <StaggeredItem className="rounded-2xl border border-border bg-surface p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Region</dt>
                <dd className="mt-1 text-sm font-medium text-dark">Kerala, India</dd>
              </StaggeredItem>
            </FadeInStagger>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
