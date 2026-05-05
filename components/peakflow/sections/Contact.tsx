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
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const counters = gsap.utils.toArray<HTMLElement>(".counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.innerText);
      counter.innerText = "0";
      
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 bg-[#191919] relative overflow-hidden" id="contact">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Social Proof Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-40 border-b border-white/5 pb-20">
          {[
            { label: "Successful Projects", value: 50, suffix: "+" },
            { label: "Countries Served", value: 12, suffix: "" },
            { label: "Cups of Coffee", value: 800, suffix: "+" },
            { label: "Client Retention", value: 98, suffix: "%" }
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                <span className="counter">{stat.value}</span>{stat.suffix}
              </div>
              <div className="text-[#0272C9] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-[#0272C9] font-bold tracking-[0.4em] uppercase text-[10px] mb-12 text-center">Ready to scale?</h2>
          </Reveal>
          
          <Reveal delay={200}>
            <h3 className="text-6xl md:text-8xl lg:text-[11rem] font-display font-bold text-white text-center leading-[0.8] tracking-tighter mb-20">
              Let's craft your <br />
              <span className="text-[#0272C9] italic">digital peak.</span>
            </h3>
          </Reveal>
          
          <div className="flex flex-col items-center gap-12">
            <Reveal delay={400}>
              <a href="mailto:hello@peakflowwebstudio.com">
                <MagneticButton className="px-16 py-10 md:px-24 md:py-14 bg-white text-[#191919] rounded-full text-xl md:text-3xl font-display font-bold group overflow-hidden shadow-2xl">
                  <span className="relative z-10 flex items-center gap-6">
                    GET IN TOUCH <Mail className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#0272C9] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                </MagneticButton>
              </a>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="flex gap-12 text-white/30 font-bold uppercase tracking-widest text-xs">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
