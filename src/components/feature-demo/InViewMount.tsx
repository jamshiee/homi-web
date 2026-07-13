"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

// Mounts children only once the wrapper scrolls into view, so looping/scripted
// demo animations don't all run simultaneously in the background on page load.
export function InViewMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  if (isInView && !mounted) setMounted(true);

  return <div ref={ref}>{mounted ? children : null}</div>;
}