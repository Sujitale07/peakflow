"use client";
import React from 'react';
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Reveal } from "@/components/peakflow/ui/Reveal";
import { MagneticButton } from "@/components/peakflow/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

const PROJECTS = [
  {
    slug: 'himalayan-echoes',
    title: 'Himalayan Echoes',
    category: 'Adventure Tourism',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  },
  {
    slug: 'summit-lodge',
    title: 'Summit Lodge',
    category: 'Luxury Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    year: '2023'
  },
  {
    slug: 'trail-blazers',
    title: 'Trail Blazers',
    category: 'Trekking Agency',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  },
  {
    slug: 'pokhara-zen',
    title: 'Pokhara Zen',
    category: 'Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=1200',
    year: '2023'
  },
  {
    slug: 'alpine-digital',
    title: 'Alpine Digital',
    category: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#0272C9] selection:text-white">
      
      <SmoothScroll>
        <section className="pt-60 pb-40">
          <div className="container mx-auto px-6">
            <Reveal>
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Selected Works</span>
              <h1 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-12">
                Studio <br /> <span className="italic text-[#0272C9]">Archive.</span>
              </h1>
            </Reveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
              {PROJECTS.map((project, i) => (
                <Reveal key={i} delay={i * 100} direction="up">
                  <Link href={`/case-studies/${project.slug}`} className="group cursor-pointer block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 bg-[#FFFFFF] border border-[#191919]/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#191919]/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-[#0272C9] uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-display font-bold text-[#191919] tracking-tighter leading-none mb-2">{project.title}</h3>
                        <span className="text-sm text-[#191919]/40 font-medium">{project.year}</span>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border border-[#191919]/10 flex items-center justify-center group-hover:bg-[#191919] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
