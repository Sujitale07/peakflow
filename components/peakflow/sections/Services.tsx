"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Reveal } from '../ui/Reveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const SERVICES = [
  { 
    id: '01',
    title: 'Adventure Tourism', 
    desc: 'Bespoke WordPress solutions for trekking and travel agencies.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02',
    title: 'Hotel Boutique', 
    desc: 'Immersive visual storytelling for luxury hospitality brands.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03',
    title: 'Brand Systems', 
    desc: 'End-to-end digital identity and UX strategy for the global stage.',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800'
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="mb-32">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
              <div className="max-w-4xl">
                 <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Our Focus</span>
                 <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-12">
                   Strategic <br /> <span className="italic text-[#0272C9]">Impact.</span>
                 </h3>
              </div>
           </div>
        </Reveal>
        
        <div className="border-t border-[#191919]/10">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id}
              className="group relative border-b border-[#191919]/10 py-12 cursor-pointer"
              onMouseEnter={() => setActiveImage(service.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                <div className="flex items-center gap-12">
                  <span className="text-[#191919]/20 font-display text-xl font-bold">{service.id}</span>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-[#191919] tracking-tight group-hover:text-[#0272C9] transition-colors duration-500">
                    {service.title}
                  </h4>
                </div>
                
                <div className="flex items-center gap-8">
                  <p className="text-base text-[#4F4543] font-light max-w-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>
                  <MagneticButton className="w-12 h-12 rounded-full border border-[#191919]/10 flex items-center justify-center group-hover:bg-[#191919] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        ref={imageRef}
        className={`fixed top-0 left-0 w-64 h-96 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-opacity duration-500 shadow-2xl ${activeImage ? 'opacity-100' : 'opacity-0'}`}
      >
        {activeImage && (
          <img 
            src={activeImage} 
            alt="Service Preview" 
            className="w-full h-full object-cover grayscale"
          />
        )}
      </div>
    </section>
  );
}
