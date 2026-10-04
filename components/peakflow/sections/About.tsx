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
    <section ref={sectionRef} className="py-40 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-start relative z-10">
          <div>
            <Reveal>
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-12 h-[0.125rem] bg-[#C49A45]" />
                 <h2 className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem]">The Problem</h2>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="text-6xl md:text-7xl font-display font-bold text-[#0A0A0A] leading-[1.1] tracking-tighter">
                A slow or outdated site is costing you <span className="text-[#C49A45] italic underline decoration-4 underline-offset-[0.75rem] decoration-[#C49A45]/20">more than you think.</span>
              </h3>
            </Reveal>
          </div>
          
          <div className="pt-10 lg:pt-32">
            <Reveal delay={400}>
              <p className="text-xl md:text-2xl text-[#6B6F6A] font-light leading-relaxed mb-20 opacity-80 font-body">
                Whether it's a tour operator losing bookings to a clunky mobile site, a local business missing leads because there's no clear way to contact them, or an agency stretched too thin to take on another build — the fix is usually the same.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <p className="text-2xl md:text-3xl text-[#0A0A0A] font-medium leading-relaxed font-body">
                You need a site or system that's fast, clear, and built around getting a result, not just existing online. <br/><br/><span className="text-[#C49A45] font-bold">That's what we build.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div 
        ref={bgTextRef}
        className="absolute bottom-10 left-0 w-[300%] whitespace-nowrap text-[30rem] font-black text-[#0A0A0A]/[0.01] select-none pointer-events-none leading-none uppercase tracking-tighter"
      >
        RESULTS RESULTS RESULTS RESULTS
      </div>
    </section>
  );
}
