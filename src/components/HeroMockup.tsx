'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroMockup() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 60]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.94]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const maxTilt = 10;
    setTilt({ x: (py - 0.5) * -maxTilt, y: (px - 0.5) * maxTilt });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <motion.div
        style={{ y, scale }}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
      >
        <div
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[380px]"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.03 : 1})`,
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              src="/images/brand/hero-app-mockup.png"
              alt="Homi app preview showing property listings"
              width={900}
              height={900}
              priority
              className="pointer-events-none w-full select-none drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}