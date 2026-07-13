import { SITE } from '@/lib/site';

type PlayStoreButtonProps = {
  className?: string;
  size?: 'sm' | 'md';
};

export function PlayStoreButton({ className = '', size = 'md' }: PlayStoreButtonProps) {
  const sizeClasses = size === 'sm' ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm';

  return (
    <a
      href={SITE.playStoreUrl}
      className={`btn-primary gap-2 ${sizeClasses} ${className}`}
      aria-label="Download Homi on Google Play Store"
    >
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 0 1-.61-.92V2.734a1.006 1.006 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 0 1 0 1.738l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
      </svg>
      {size === 'sm' ? 'Get the App' : 'Download on Play Store'}
    </a>
  );
}
