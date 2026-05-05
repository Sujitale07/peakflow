"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';

const STEPS = [
  { 
    num: '01', 
    title: 'Strategy', 
    desc: 'We begin by deconstructing your business goals and audience psychology to build a blueprint for success.' 
  },
  { 
    num: '02', 
    title: 'Visual Identity', 
    desc: 'Crafting a unique aesthetic language that resonates with the bold and the visionary.' 
  },
  { 
    num: '03', 
    title: 'Precision Build', 
    desc: 'High-performance WordPress engineering using bespoke themes and elite technical SEO.' 
  },
  { 
    num: '04', 
    title: 'Scaling Peak', 
    desc: 'Rigorous testing followed by a global launch and ongoing performance scaling.' 
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
    <section ref={containerRef} className="py-60 bg-white relative overflow-hidden" id="process">
      <div className="container mx-auto px-6">
        <Reveal className="mb-40">
           <div className="max-w-4xl">
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Our Method</span>
              <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-12">
                The <br /> <span className="italic text-[#0272C9]">Journey.</span>
              </h3>
           </div>
        </Reveal>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#191919]/5 -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="w-full h-full bg-[#0272C9] origin-top scale-y-0" />
          </div>

          <div className="space-y-40">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={`flex flex-col md:flex-row items-center gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                  {/* Content Block */}
                  <div className="flex-1">
                    <span className="text-[#0272C9] font-display text-2xl font-bold mb-6 block">/{step.num}</span>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-[#191919] tracking-tighter mb-8">{step.title}</h4>
                    <p className="text-xl text-[#4F4543] font-light leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Center Dot (Visual Bridge) */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-white border border-[#191919]/10 items-center justify-center relative z-10">
                     <div className="w-2 h-2 rounded-full bg-[#0272C9]" />
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
