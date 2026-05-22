"use client";
import React, { useState, useEffect, useRef } from 'react';
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
    <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-white perspective-1000">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#191919 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Reveal delay={100} direction="down">
            <span className="text-[#0272C9] font-bold tracking-[0.3em] uppercase text-xs mb-8 block">
              Based in Nepal · Available Worldwide
            </span>
          </Reveal>
          
          <div ref={titleRef} className="will-change-transform">
            <h1 className="text-[12rem] md:text-[8rem] lg:text-[7.5rem] font-display font-bold leading-[0.9] text-[#191919] tracking-tighter mb-12">
              <div className="flex flex-col items-center">
                <SplitText text="Elevating the" delay={300} />
                <div className="text-[#0272C9] italic flex items-center min-h-[1.1em]">
                  <Typewriter 
                    words={["Standard", "Future", "Experience", "Landmark"]} 
                    typingSpeed={100}
                    deletingSpeed={50}
                  />
                </div>
                <SplitText text="of Web Design." delay={500} />
              </div>
            </h1>
          </div>
          
          <Reveal delay={800} className="max-w-2xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-[#4F4543] font-light leading-relaxed">
              We build premium WordPress experiences for the bold. 
              Built in the mountains of <span className="text-[#191919] font-medium border-b-2 border-[#0272C9]">Pokhara</span>, 
              designed for the global stage.
            </p>
          </Reveal>
          
          <Reveal delay={1000}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <MagneticButton className="px-12 py-6 bg-[#191919] text-white rounded-full text-lg font-medium overflow-hidden group shadow-xl">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#0272C9] translate-y-full group-hover:translate-y-0 transition-transform duration-500 origin-bottom" />
              </MagneticButton>
              
              <button className="flex items-center gap-3 text-[#191919] font-medium hover:text-[#0272C9] transition-colors group">
                <div className="w-12 h-12 rounded-full border border-[#191919]/20 flex items-center justify-center group-hover:border-[#0272C9] transition-colors">
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </div>
                <span>Explore Work</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
