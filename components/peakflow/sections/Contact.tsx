"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail } from 'lucide-react';

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} data-theme="dark" className="py-40 bg-[#000000] relative overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`, backgroundSize: '2.5rem 2.5rem' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-[#C49A45] font-bold tracking-[0.4em] uppercase text-[0.625rem] mb-12 text-center">Next Steps</h2>
          </Reveal>
          
          <Reveal delay={200}>
            <h3 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-[#FFFFFF] text-center leading-[0.9] tracking-tighter mb-12">
              Not sure which one you need? <br />
              <span className="text-[#C49A45] italic">Start with a free audit.</span>
            </h3>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-xl md:text-2xl text-[#FFFFFF]/60 font-light leading-relaxed font-body text-center max-w-3xl mx-auto mb-20">
              Send us your site, your idea, or your current agency workload — we'll tell you honestly what's worth fixing first.
            </p>
          </Reveal>
          
          <div className="flex flex-col items-center gap-12">
            <Reveal delay={400}>
              <a href="mailto:hello@arclyn.studio">
                <MagneticButton className="px-16 py-8 md:px-20 md:py-10 bg-[#FFFFFF] text-[#0A0A0A] rounded-full text-xl md:text-2xl font-display font-bold group overflow-hidden shadow-2xl">
                  <span className="relative z-10 flex items-center gap-6">
                    Get in Touch <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#C49A45] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                </MagneticButton>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
