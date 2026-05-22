"use client";
import React from 'react';
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Reveal } from "@/components/peakflow/ui/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from 'next/link';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const project = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Adventure & Tourism",
    year: "2024",
    client: "Himalayan Expeditions",
    role: "UX/UI Design, Development",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
    overview: "Creating a digital experience that mirrors the grandeur of the Himalayas. We focused on high-performance itinerary builders and immersive storytelling.",
    results: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Mobile Users", value: "65%" }
    ]
  };

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#0272C9] selection:text-white">
      
      <SmoothScroll>
        <section className="pt-60 pb-20">
          <div className="container mx-auto px-6">
            <Reveal>
              <Link href="/case-studies" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#191919]/40 hover:text-[#0272C9] transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Case Studies
              </Link>
              
              <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
                <div>
                  <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Project Showcase</span>
                  <h1 className="text-6xl md:text-[8rem] font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-0">
                    {project.title}
                  </h1>
                </div>
                <div className="flex gap-12 pb-4 border-b border-[#191919]/5">
                   <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#191919]/30 mb-2">Year</span>
                      <span className="text-sm font-bold">{project.year}</span>
                   </div>
                   <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#191919]/30 mb-2">Client</span>
                      <span className="text-sm font-bold">{project.client}</span>
                   </div>
                   <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#191919]/30 mb-2">Role</span>
                      <span className="text-sm font-bold">{project.role}</span>
                   </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="aspect-video w-full rounded-3xl overflow-hidden mb-40 bg-[#fcfcfc] border border-[#191919]/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-20 mb-40">
              <Reveal className="lg:col-span-2">
                <h2 className="text-4xl font-display font-bold mb-8 tracking-tighter">The Vision</h2>
                <p className="text-2xl font-light text-[#4F4543] leading-relaxed">
                  {project.overview}
                </p>
              </Reveal>
              
              <Reveal delay={200} className="space-y-12 bg-[#fcfcfc] p-12 rounded-3xl border border-[#191919]/5">
                 {project.results.map((result, i) => (
                   <div key={i}>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#191919]/30 mb-2">{result.label}</span>
                      <span className="text-4xl font-display font-bold text-[#0272C9]">{result.value}</span>
                   </div>
                 ))}
                 <button className="w-full py-4 bg-[#191919] text-white rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-[#0272C9] transition-colors">
                    Live Preview <ExternalLink className="w-4 h-4" />
                 </button>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
