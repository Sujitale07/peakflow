"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MarqueeProps {
  items: string[];
  direction?: 1 | -1;
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = 1, speed = 1, className = "" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    const w = marqueeRef.current.offsetWidth;
    const xDist = w / 2;

    gsap.to(marqueeRef.current, {
      x: direction === 1 ? -xDist : xDist,
      duration: 30 / speed,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(marqueeRef.current, { x: 0 });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div ref={marqueeRef} className="inline-block">
        <div className="inline-flex gap-8 px-4">
          {items.map((item, i) => (
            <span key={i} className="text-4xl md:text-8xl font-display font-black text-[#0A0A0A]/10 uppercase tracking-tighter">
              {item} <span className="text-[#C49A45] ml-8">/</span>
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="text-4xl md:text-8xl font-display font-black text-[#0A0A0A]/10 uppercase tracking-tighter">
              {item} <span className="text-[#C49A45] ml-8">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
