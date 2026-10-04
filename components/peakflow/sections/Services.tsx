"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Reveal } from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const SERVICES = [
  { 
    id: '01',
    title: 'Websites That Convert', 
    desc: 'Fast, mobile-first websites for travel, hospitality, and local service businesses — rebuilt or built from scratch, with booking and inquiry flows that actually work.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '02',
    title: 'Web Apps & Dashboards', 
    desc: 'Custom web applications and internal tools built with Next.js and React — from customer dashboards to booking systems to lightweight SaaS products.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '03',
    title: 'White-Label Dev', 
    desc: 'Extra development capacity for design and marketing agencies — we build under your brand, so you can take on more without hiring.',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '04',
    title: 'Automation & AI', 
    desc: 'Practical automation — lead capture, booking reminders, AI-assisted features — added where they save real time, not as a buzzword.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
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
    <section ref={containerRef} className="py-40 bg-[#FFFFFF] relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="mb-32">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Our Services</span>
                 <h3 className="text-7xl md:text-8xl font-display font-bold text-[#0A0A0A] tracking-tighter leading-[0.8]">
                   Three <br /> <span className="italic text-[#C49A45]">Pillars.</span>
                 </h3>
              </div>
              <div className="max-w-sm">
                 <p className="text-lg text-[#6B6F6A] font-light leading-relaxed mb-4 font-body">
                   We deliver precision-engineered solutions that don't just look stunning—they drive measurable growth and define industry benchmarks.
                 </p>
                 <div className="w-12 h-[0.0625rem] bg-[#C49A45]" />
              </div>
           </div>
        </Reveal>
        
        <div className="border-t border-[#0A0A0A]/10">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id}
              className="group relative border-b border-[#0A0A0A]/10 py-12 cursor-pointer"
              onMouseEnter={() => setActiveImage(service.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                <div className="flex items-center gap-12">
                  <span className="text-[#0A0A0A]/20 font-display text-xl font-bold">{service.id}</span>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#C49A45] transition-colors duration-500">
                    {service.title}
                  </h4>
                </div>
                
                <div className="flex items-center gap-8">
                  <p className="text-base text-[#6B6F6A] font-light max-w-sm opacity-60 group-hover:opacity-100 transition-opacity font-body">
                    {service.desc}
                  </p>
                  <MagneticButton className="w-12 h-12 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#FFFFFF] transition-all">
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
