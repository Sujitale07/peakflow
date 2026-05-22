"use client";
import React from 'react';
import { Reveal } from '../ui/Reveal';

const TESTIMONIALS = [
  {
    quote: "PeakFlow transformed our digital presence. Their attention to detail and mountain-inspired design is unmatched.",
    author: "Mingma Sherpa",
    role: "Himalayan Trails"
  },
  {
    quote: "The best WordPress studio in Nepal. They delivered a site that outshines our global competitors.",
    author: "Ankit Gupta",
    role: "Pokhara Boutique"
  },
  {
    quote: "Technical mastery combined with artistic vision. They didn't just build a site; they built a brand legacy.",
    author: "Sarah Jenkins",
    role: "Global Adventure"
  }
];

export function Testimonials() {
  return (
    <section className="py-60 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <Reveal className="mb-40">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Client Voices</span>
                 <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8]">
                   Trusted by <br /> <span className="italic text-[#0272C9]">Visionaries.</span>
                 </h3>
              </div>
              <div className="max-w-sm">
                 <p className="text-lg text-[#4F4543] font-light leading-relaxed mb-4">
                   Real stories from the visionary brands and operators who have reached new digital peaks with our studio.
                 </p>
                 <div className="w-12 h-[0.0625rem] bg-[#0272C9]" />
              </div>
           </div>
        </Reveal>

        <div className="flex flex-col">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative py-20 border-b border-[#191919]/10 hover:bg-[#fcfcfc] transition-colors px-4 md:px-10">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  {/* Author Meta */}
                  <div className="lg:col-span-3">
                    <span className="text-[#191919] font-display text-lg font-bold block mb-1">{t.author}</span>
                    <span className="text-[#0272C9] text-[0.625rem] font-bold uppercase tracking-widest">{t.role}</span>
                  </div>
                  
                  {/* Quote Text - Large but Clean */}
                  <div className="lg:col-span-8">
                    <blockquote className="text-2xl md:text-3xl font-display font-medium text-[#191919] leading-[1.2] tracking-tight group-hover:text-[#0272C9] transition-colors duration-500">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Index / Accent */}
                  <div className="lg:col-span-1 flex justify-end">
                    <span className="text-[#191919]/10 font-display text-sm font-bold">0{i+1}</span>
                  </div>
                </div>

                {/* Hover Reveal Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0272C9] group-hover:w-full transition-all duration-700 ease-expo" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
