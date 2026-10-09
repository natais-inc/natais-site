'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.dataset.armed = '1';
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.dataset.seen = '1'; io.disconnect(); } }),
      { threshold: 0.06, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    const t = setTimeout(() => { el.dataset.seen = '1'; }, 2600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}
