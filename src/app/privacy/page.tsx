import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { SectionHeader } from '@/components/SectionHeader';
import { DecorativeBlob } from '@/components/DecorativeBlob';
import { FadeIn } from '@/components/motion/FadeIn';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Homi privacy policy — how we handle your data.',
  path: '/privacy/',
});


export default function PrivacyPage() {
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
              eyebrow="Legal"
              title="Privacy Policy"
              description="Our full privacy policy is hosted separately and kept up to date there."
            />
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-2xl">
          <FadeIn>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Homi Holdings is committed to protecting your privacy. Details on how we collect, use,
                and safeguard your personal information — including phone numbers used for OTP login and
                property listing data — are documented in our official privacy policy.
              </p>

              <a
                href={SITE.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex w-full justify-center sm:w-auto"
              >
                Read full Privacy Policy
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <p className="break-all text-xs text-muted">
                Opens{' '}
                <a href={SITE.privacyUrl} className="underline" target="_blank" rel="noopener noreferrer">
                  {SITE.privacyUrl}
                </a>{' '}
                in a new tab.
              </p>
            </div>

            <p className="mt-8 text-sm text-muted">
              Questions?{' '}
              <Link href="/contact/" className="font-semibold text-dark underline-offset-4 hover:underline">
                Contact support
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}



