'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NavPillLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  ease?: string;
}

export function NavPillLink({ href, label, isActive = false, ease = 'power3.out' }: NavPillLinkProps) {
  const circleRef = useRef<HTMLSpanElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const hoverLabelRef = useRef<HTMLSpanElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const pill = circle?.parentElement as HTMLElement | null;
    if (!circle || !pill) return;

    const layout = () => {
      const { width: w, height: h } = pill.getBoundingClientRect();
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      gsap.set(circle, {
        width: D,
        height: D,
        bottom: -delta,
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      if (labelRef.current) gsap.set(labelRef.current, { y: 0 });
      if (hoverLabelRef.current) gsap.set(hoverLabelRef.current, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });
      tl.to(circle, { scale: 1.2, duration: 2, ease, overwrite: 'auto' }, 0);
      if (labelRef.current) {
        tl.to(labelRef.current, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
      }
      if (hoverLabelRef.current) {
        gsap.set(hoverLabelRef.current, { y: h + 100, opacity: 0 });
        tl.to(hoverLabelRef.current, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }
      tlRef.current = tl;
    };

    layout();
    window.addEventListener('resize', layout);
    document.fonts?.ready.then(layout).catch(() => {});
    return () => window.removeEventListener('resize', layout);
  }, [ease]);

  const handleEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: 'auto' });
  };

  const handleLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, { duration: 0.2, ease, overwrite: 'auto' });
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative inline-flex items-center overflow-hidden rounded-pill px-3 py-2 text-sm font-medium"
    >
      <span
        ref={circleRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 z-0 block rounded-full bg-dark"
        style={{ willChange: 'transform' }}
      />
      <span className="relative z-10 inline-block leading-none">
        <span
          ref={labelRef}
          className="relative z-10 inline-block leading-none text-muted"
          style={{ willChange: 'transform' }}
        >
          {label}
        </span>
        <span
          ref={hoverLabelRef}
          aria-hidden
          className="absolute left-0 top-0 z-10 inline-block leading-none text-white"
          style={{ willChange: 'transform, opacity' }}
        >
          {label}
        </span>
      </span>
      {isActive && (
        <span
          className="absolute left-1/2 -bottom-[6px] z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-dark"
          aria-hidden
        />
      )}
    </Link>
  );
}