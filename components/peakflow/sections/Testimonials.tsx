"use client";
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ShieldCheck } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-40 bg-[#FFFFFF]" id="risk-reversal">
      <div className="container mx-auto px-6">
        <Reveal className="mb-32">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Risk Reversal</span>
                 <h3 className="text-6xl md:text-8xl font-display font-bold text-[#0A0A0A] tracking-tighter leading-[0.8]">
                   A guarantee that <br /> <span className="italic text-[#C49A45]">actually means something.</span>
                 </h3>
              </div>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={100}>
            <div className="p-12 border border-[#0A0A0A]/5 rounded-3xl bg-[#FFFFFF] hover:border-[#C49A45]/30 transition-colors">
              <ShieldCheck className="w-12 h-12 text-[#C49A45] mb-8" />
              <h4 className="text-2xl font-display font-bold text-[#0A0A0A] mb-4">For Website Projects</h4>
              <p className="text-[#6B6F6A] font-body text-lg leading-relaxed">
                If your new site doesn't load in under 2 seconds and pass mobile usability testing, we fix it — <span className="font-bold text-[#0A0A0A]">free.</span>
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="p-12 border border-[#0A0A0A]/5 rounded-3xl bg-[#FFFFFF] hover:border-[#C49A45]/30 transition-colors">
              <ShieldCheck className="w-12 h-12 text-[#C49A45] mb-8" />
              <h4 className="text-2xl font-display font-bold text-[#0A0A0A] mb-4">For Web App & Agency Work</h4>
              <p className="text-[#6B6F6A] font-body text-lg leading-relaxed">
                Fixed scope agreed upfront, so there are <span className="font-bold text-[#0A0A0A]">no surprise costs</span> on either side.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
