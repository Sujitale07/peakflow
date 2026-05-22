"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .to(barRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.5")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut"
    }, "+=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[20000000] bg-[#191919] flex flex-col items-center justify-center overflow-hidden">
      <div className="overflow-hidden mb-8">
        <div ref={textRef} className="text-white font-display text-4xl md:text-6xl font-bold tracking-tighter">
          PeakFlow<span className="text-[#0272C9]">.</span>
        </div>
      </div>
      <div className="w-48 h-[0.0625rem] bg-white/10 relative">
        <div ref={barRef} className="absolute inset-0 bg-[#0272C9] scale-x-0 origin-left" />
      </div>
    </div>
  );
}
