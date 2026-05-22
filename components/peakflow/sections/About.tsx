"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bgTextRef.current, {
      xPercent: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-60 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-start relative z-10">
          <div>
            <Reveal>
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-12 h-[0.125rem] bg-[#0272C9]" />
                 <h2 className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[0.625rem]">Philosophy</h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] leading-[0.9] tracking-tighter">
                We don't build websites. We build <span className="text-[#0272C9] italic underline decoration-4 underline-offset-[0.75rem] decoration-[#0272C9]/20">digital landmarks.</span>
              </h3>
            </Reveal>
          </div>
          
          <div className="pt-20 lg:pt-60">
            <Reveal delay={400}>
              <p className="text-2xl md:text-3xl text-[#4F4543] font-light leading-relaxed mb-20 opacity-80">
                PeakFlow is a boutique digital studio headquartered in Pokhara. 
                We specialize in high-performance WordPress systems for the bold and the visionary.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-2 gap-20 pt-20 border-t border-[#191919]/10 relative">
               {/* Design Skill: Large Decorative Number with Perspective */}
              <div className="group">
                <span className="block text-9xl font-display font-black text-[#191919] tracking-tighter mb-4 group-hover:text-[#0272C9] transition-colors duration-500">100</span>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-[0.0625rem] bg-[#0272C9]" />
                  <span className="text-[#4F4543] text-[0.625rem] font-black uppercase tracking-widest">Satisfaction %</span>
                </div>
              </div>
              <div className="group">
                <span className="block text-9xl font-display font-black text-[#191919] tracking-tighter mb-4 group-hover:text-[#0272C9] transition-colors duration-500">50+</span>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-[0.0625rem] bg-[#0272C9]" />
                  <span className="text-[#4F4543] text-[0.625rem] font-black uppercase tracking-widest">World-Class Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div 
        ref={bgTextRef}
        className="absolute bottom-10 left-0 w-[300%] whitespace-nowrap text-[30rem] font-black text-[#191919]/[0.01] select-none pointer-events-none leading-none uppercase tracking-tighter"
      >
        LANDMARKS LANDMARKS LANDMARKS LANDMARKS
      </div>
    </section>
  );
}
