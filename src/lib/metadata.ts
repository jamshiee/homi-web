import type { Metadata } from 'next';
import { SITE } from './site';

type PageMetaOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = SITE.description,
  path = '',
}: PageMetaOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: `${SITE.url}/images/brand/logo-transparent.png`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
