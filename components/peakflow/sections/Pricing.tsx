"use client";
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

const TIERS = [
  {
    name: 'Website Rebuild',
    price: '$1,500',
    unit: '',
    desc: 'Fast, mobile-first websites.',
    highlight: false
  },
  {
    name: 'Rebuild + SEO Foundation',
    price: '$2,400',
    unit: '',
    desc: 'Website + technical SEO setup.',
    highlight: true
  },
  {
    name: 'Web App / SaaS',
    price: '$3,000+',
    unit: '',
    desc: 'Custom dashboards & apps.',
    highlight: false
  },
  {
    name: 'White-Label Dev',
    price: 'Scoped',
    unit: '',
    desc: 'Project or monthly retainer.',
    highlight: false
  },
  {
    name: 'Ongoing Care Plan',
    price: '$150',
    unit: '/mo',
    desc: 'Monthly support and hosting.',
    highlight: false
  }
];

export function Pricing() {
  return (
    <section className="py-40 bg-[#FFFFFF] overflow-hidden" id="pricing">
      <div className="container mx-auto px-6">
        <Reveal className="mb-32">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#C49A45] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Investment</span>
                 <h3 className="text-6xl md:text-8xl font-display font-bold text-[#0A0A0A] tracking-tighter leading-[0.8]">
                   Straightforward <br /> <span className="italic text-[#C49A45]">pricing.</span>
                 </h3>
              </div>
              <div className="max-w-sm">
                 <p className="text-lg text-[#6B6F6A] font-light leading-relaxed mb-4 font-body">
                   Matched exactly to the work you need, with no surprise costs.
                 </p>
                 <div className="w-12 h-[0.0625rem] bg-[#C49A45]" />
              </div>
           </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 relative">
          {TIERS.map((tier, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`relative p-8 h-full border ${tier.highlight ? 'bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A]' : 'bg-[#FFFFFF] text-[#0A0A0A] border-[#0A0A0A]/5'} group transition-all duration-700 hover:z-10 flex flex-col justify-between`}>
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className={`text-[0.625rem] font-bold uppercase tracking-[0.2em] ${tier.highlight ? 'text-[#C49A45]' : 'text-[#6B6F6A]'}`}>
                      {tier.name}
                    </span>
                  </div>

                  <div className="mb-12">
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl lg:text-5xl font-display font-black tracking-tighter leading-none">
                        {tier.price}<span className="text-[#C49A45] text-2xl">{tier.unit}</span>
                      </span>
                    </div>
                    <p className="text-sm font-light opacity-60 leading-relaxed font-body">
                      {tier.desc}
                    </p>
                  </div>
                </div>

                <MagneticButton className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-[0.625rem] flex items-center justify-center gap-2 transition-all ${
                  tier.highlight ? 'bg-[#C49A45] text-[#FFFFFF]' : 'bg-[#0A0A0A] text-[#FFFFFF]'
                }`}>
                  Inquire <ArrowRight className="w-3 h-3" />
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
