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
    title: 'Small Earth',
    category: 'Non-Profit Organization',
    domain: 'smallearth.org',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[70vw]',
    height: 'h-[75vh]',
    offset: 'mt-0',
    desc: "A clean, content-focused site built to support the organization's mission-driven work online."
  },
  {
    title: 'Annapurna Septic Tank',
    category: 'Local Service Business',
    domain: 'annapurnaseptictank.com',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[50vw]',
    height: 'h-[60vh]',
    offset: 'mt-40',
    desc: "A local service business's first professional website — our first client, still live today."
  },
  {
    title: 'Organic Nepal Exim',
    category: 'Export Business',
    domain: 'organicnepalexim.com',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[60vw]',
    height: 'h-[70vh]',
    offset: 'mt-20',
    desc: "A business site built to give a growing export business real credibility online."
  },
  {
    title: 'ConnectAPre',
    category: 'WordPress Plugin',
    domain: 'wordpress.org/plugins',
    image: 'https://images.unsplash.com/photo-1627398240411-8bbeb630e104?auto=format&fit=crop&q=80&w=1200',
    width: 'w-[55vw]',
    height: 'h-[65vh]',
    offset: 'mt-60',
    desc: "A WordPress plugin built and published independently, listed on WordPress.org."
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
    <section ref={sectionRef} className="bg-[#FFFFFF] overflow-hidden" id="work">
      <div className="container mx-auto px-6 py-20 md:py-40 border-b border-[#0A0A0A]/5">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20">
            <div className="max-w-4xl">
              <span className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-6 md:mb-8 block">Selected Work</span>
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-[#0A0A0A] tracking-tighter leading-[0.9] md:leading-[0.8] mb-6 md:mb-10">
                Real projects, <br /> <span className="italic text-[#C49A45]">real work.</span>
              </h3>
            </div>
            
            <div className="max-w-md pb-4 md:pb-10">
              <h4 className="text-[#0A0A0A] font-display font-bold text-lg md:text-xl mb-3 md:mb-4">Founder Experience</h4>
              <p className="text-xs md:text-sm text-[#6B6F6A] font-light leading-relaxed font-body">
                Before founding Arclyn, our founder worked on business and tourism web projects at Vairab Interactive and Asterdio, including mountainglowtreks.com, argonhr.com, and others — building hands-on experience across WordPress, custom platforms, and agency-scale delivery.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div ref={triggerRef} className="h-screen flex items-center relative overflow-hidden bg-[#FFFFFF]">
        <div ref={galleryRef} className="flex gap-8 sm:gap-20 md:gap-40 px-6 sm:px-16 md:px-[15rem] flex-nowrap items-start h-[75vh] md:h-[80vh] py-6 md:py-10 will-change-transform">
          {PROJECTS.map((project, i) => (
            <div key={i} className={`flex-shrink-0 w-[85vw] sm:w-[65vw] md:${project.width} h-full md:${project.height} mt-0 md:${project.offset} group relative`}>
              <div className="w-full h-full relative overflow-hidden bg-[#FFFFFF] border border-[#0A0A0A]/5 rounded-2xl shadow-xl transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80"
                  onLoad={() => ScrollTrigger.refresh()}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/50 to-transparent" />
                
                <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[#FFFFFF] text-[0.625rem] font-bold uppercase tracking-[0.3em] bg-[#000000]/50 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-[#FFFFFF]/40 text-[0.625rem] font-bold uppercase tracking-widest">{project.domain}</span>
                  </div>
                  
                  <div>
                    <span className="text-[#FFFFFF]/60 font-bold uppercase tracking-[0.3em] text-[0.625rem] mb-2 sm:mb-4 block">{project.category}</span>
                    <h4 className="!text-[#FFFFFF] text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tighter mb-3 sm:mb-4 leading-none">{project.title}</h4>
                    <p className="text-[#FFFFFF]/80 text-xs sm:text-sm font-body max-w-lg mb-6 sm:mb-8 line-clamp-3 md:line-clamp-none">{project.desc}</p>
                    
                    <MagneticButton className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFFFFF] text-[#0A0A0A] rounded-full text-[0.625rem] font-bold uppercase tracking-widest flex items-center gap-3 group/btn hover:bg-[#C49A45] hover:text-[#FFFFFF] transition-all">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[85vw] sm:w-[30rem] md:w-[40rem] h-full flex flex-col items-center justify-center text-center px-4">
            <h5 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#0A0A0A] leading-tight mb-8 sm:mb-12 uppercase tracking-tighter">
              Your project <br /> <span className="text-[#C49A45] italic">could be the next.</span>
            </h5>
            <MagneticButton className="px-8 sm:px-12 py-4 sm:py-6 bg-[#C49A45] text-[#FFFFFF] rounded-full font-bold uppercase tracking-widest text-[0.625rem] flex items-center gap-4 hover:bg-[#0A0A0A] transition-all shadow-xl">
              Start Project <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
