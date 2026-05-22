"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Himalayan Trails',
    category: 'Adventure Tourism',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[70vw]',
    height: 'h-[75vh]',
    offset: 'mt-0'
  },
  {
    title: 'Pokhara Boutique',
    category: 'Luxury Stay',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[50vw]',
    height: 'h-[60vh]',
    offset: 'mt-40'
  },
  {
    title: 'Everest Base',
    category: 'E-Commerce',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[60vw]',
    height: 'h-[70vh]',
    offset: 'mt-20'
  },
  {
    title: 'Lakeside Grill',
    category: 'Hospitality',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[55vw]',
    height: 'h-[65vh]',
    offset: 'mt-60'
  }
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const galleryEl = galleryRef.current;
    const triggerEl = triggerRef.current;
    if (!galleryEl || !triggerEl) return;

    const scrollWidth = galleryEl.scrollWidth;
    const amountToScroll = scrollWidth - window.innerWidth;

    if (amountToScroll > 0) {
      gsap.to(galleryEl, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          pinType: "transform",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden" id="work">
      <div className="container mx-auto px-6 py-40 border-b border-[#191919]/5">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20">
            <div className="max-w-4xl">
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Selected Works</span>
              <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-10">
                Studio <br /> <span className="italic text-[#0272C9]">Archive.</span>
              </h3>
            </div>
            
            <div className="max-w-sm pb-10">
              <p className="text-xl text-[#4F4543] font-light leading-relaxed mb-6">
                Our portfolio is a collection of digital landmarks—each built with technical precision and a deep understanding of brand heritage.
              </p>
              <p className="text-[0.625rem] text-[#191919]/40 font-bold uppercase tracking-[0.5em] leading-loose">
                Specializing in Tourism <br /> & Hospitality Excellence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div ref={triggerRef} className="h-screen flex items-center relative overflow-hidden bg-[#fcfcfc]">
        <div ref={galleryRef} className="flex gap-40 px-[15rem] flex-nowrap items-start h-[80vh] py-10 will-change-transform">
          {PROJECTS.map((project, i) => (
            <div key={i} className={`flex-shrink-0 ${project.width} ${project.height} ${project.offset} group relative`}>
              <div className="w-full h-full relative overflow-hidden bg-white border border-[#191919]/5 rounded-2xl shadow-xl transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onLoad={() => ScrollTrigger.refresh()}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/60 to-transparent" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-[0.625rem] font-bold uppercase tracking-[0.3em] bg-[#191919]/50 backdrop-blur-md px-4 py-2 rounded-full">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-white/40 text-[0.625rem] font-bold uppercase tracking-widest">{project.year}</span>
                  </div>
                  
                  <div>
                    <span className="text-white/60 font-bold uppercase tracking-[0.3em] text-[0.625rem] mb-4 block">{project.category}</span>
                    <h4 className="!text-white text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-none">{project.title}</h4>
                    
                    <MagneticButton className="px-8 py-4 bg-white text-[#191919] rounded-full text-[0.625rem] font-bold uppercase tracking-widest flex items-center gap-3 group/btn hover:bg-[#0272C9] hover:text-white transition-all">
                      View Case <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[40rem] h-full flex flex-col items-center justify-center text-center">
            <h5 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] leading-tight mb-12 uppercase tracking-tighter">
              Your project <br /> <span className="text-[#0272C9] italic">could be the next.</span>
            </h5>
            <MagneticButton className="px-12 py-6 bg-[#0272C9] text-white rounded-full font-bold uppercase tracking-widest text-[0.625rem] flex items-center gap-4 hover:bg-[#191919] transition-all shadow-xl">
              Start Project <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
