"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(imgRef.current, {
      scale: 1.2,
      yPercent: 10,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-60 bg-[#191919] text-white relative overflow-hidden">
      {/* Background Image with Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            ref={imgRef}
            src="https://plus.unsplash.com/premium_photo-1691735666207-be6e91326e3a?q=80&w=1176&auto=format&fit=crop" 
            alt="Mountain Landscape" 
            className="w-full h-full object-cover opacity-30 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={textRef} className="will-change-transform">
            <Reveal>
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-12 block">Our Ethos</span>
            </Reveal>
            
            <h3 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-16">
              We bridge <br /> 
              the gap between <br /> 
              <span className="italic text-[#0272C9]">heritage</span> & <br /> 
              <span className="italic">innovation.</span>
            </h3>
            
            <Reveal delay={200}>
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-16 h-[1px] bg-[#0272C9] group-hover:w-24 transition-all duration-500" />
                <p className="text-xl font-light opacity-60 leading-relaxed max-w-sm">
                  Rooted in the Himalayas, designed for a digital world that never stops moving.
                </p>
              </div>
            </Reveal>
          </div>
          
          {/* Design Skill: Geometric Framing */}
          <div className="hidden lg:block relative h-[60vh] border border-white/10 p-12 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#0272C9] opacity-40 group-hover:w-full group-hover:h-full transition-all duration-1000" />
            <div className="relative z-10 h-full flex flex-col justify-end">
               <span className="text-[12vw] font-display font-black opacity-[0.03] leading-none mb-8">CRAFT</span>
               <p className="text-sm font-medium tracking-[0.3em] uppercase opacity-40">Precision Build · Local Roots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
