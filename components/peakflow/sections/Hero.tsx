"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';
import { SplitText } from '../ui/SplitText';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Typewriter } from '../ui/Typewriter';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-bound 3D Skew & Tilt
    gsap.to(titleRef.current, {
      rotateX: 15,
      skewX: 5,
      y: 50,
      opacity: 0.9,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-[#FFFFFF] perspective-1000">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#0A0A0A 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Reveal delay={100} direction="down">
            <span className="text-[#C49A45] font-bold tracking-[0.3em] uppercase text-xs mb-8 block">
              For travel, local services & agencies
            </span>
          </Reveal>

          <div ref={titleRef} className="will-change-transform">
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] font-display font-bold leading-[1.0] md:leading-[0.9] text-[#0A0A0A] tracking-tighter mb-8 sm:mb-12">
              <div className="flex flex-col items-center">
                <SplitText text="Websites and Web" delay={300} />
                <SplitText text="Apps that actually" delay={400} />
                <div className="text-[#C49A45] italic flex items-center min-h-[1.1em]">
                  <Typewriter
                    words={["Convert.", "Perform.", "Scale.", "Deliver."]}
                    typingSpeed={100}
                    deletingSpeed={50}
                  />
                </div>
              </div>
            </h1>
          </div>

          <Reveal delay={800} className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-base sm:text-xl md:text-2xl text-[#6B6F6A] font-light leading-relaxed font-body">
              Arclyn Studio builds fast, conversion-focused websites, booking systems, and web apps — plus white-label development support for agencies that need extra hands without hiring in-house.
            </p>
          </Reveal>

          <Reveal delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full">
              <MagneticButton className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-[#0A0A0A] text-[#FFFFFF] rounded-full text-base sm:text-lg font-medium overflow-hidden group shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get a Free Website Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#C49A45] translate-y-full group-hover:translate-y-0 transition-transform duration-500 origin-bottom" />
              </MagneticButton>

              <button className="flex items-center justify-center gap-3 text-[#0A0A0A] font-medium hover:text-[#C49A45] transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:border-[#C49A45] transition-colors">
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </div>
                <span>See what we build ↓</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
