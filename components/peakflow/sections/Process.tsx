"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';

const STEPS = [
  { 
    num: '01', 
    title: 'Free Audit or Scoping Call', 
    desc: 'For websites, a short video audit. For web apps or agency work, a scoping conversation to align on goals.' 
  },
  { 
    num: '02', 
    title: 'Fixed-Price or Retainer Proposal', 
    desc: 'One clear price or monthly rate, agreed upon before any work starts. No surprise invoices.' 
  },
  { 
    num: '03', 
    title: 'Build, With Visibility', 
    desc: 'Weekly progress updates. We don\'t treat the build phase like a black box until reveal day.' 
  },
  { 
    num: '04', 
    title: 'Launch & Support', 
    desc: 'We stay involved after delivery to ensure the transition is smooth and the system runs perfectly.' 
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 bg-[#FFFFFF] relative overflow-hidden" id="process">
      <div className="container mx-auto px-6">
        <Reveal className="mb-40">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">How We Work</span>
                 <h3 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] tracking-tighter leading-[0.8]">
                   A clear process, <br /> <span className="italic text-[#C49A45]">whichever pillar you need.</span>
                 </h3>
              </div>
           </div>
        </Reveal>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[0.0625rem] bg-[#0A0A0A]/5 -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="w-full h-full bg-[#C49A45] origin-top scale-y-0" />
          </div>

          <div className="space-y-40">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={`flex flex-col md:flex-row items-center gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                  {/* Content Block */}
                  <div className="flex-1">
                    <span className="text-[#C49A45] font-display text-2xl font-bold mb-6 block">/{step.num}</span>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-[#0A0A0A] tracking-tighter mb-8">{step.title}</h4>
                    <p className="text-xl text-[#6B6F6A] font-light leading-relaxed max-w-md mx-auto md:mx-0 font-body">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Center Dot (Visual Bridge) */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#0A0A0A]/10 items-center justify-center relative z-10">
                     <div className="w-2 h-2 rounded-full bg-[#C49A45]" />
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
