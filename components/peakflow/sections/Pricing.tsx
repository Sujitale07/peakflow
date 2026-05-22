"use client";
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { Check, ArrowRight } from 'lucide-react';

const TIERS = [
  {
    name: 'Starter',
    price: '40',
    unit: 'k',
    desc: 'Ideal for landing pages & single-page portfolios.',
    features: ['One-Page Design', 'Speed Optimization', 'Standard SEO', 'Contact Form'],
    highlight: false
  },
  {
    name: 'Boutique',
    price: '99',
    unit: 'k',
    desc: 'Perfect for small hotels & local operators.',
    features: ['Custom WP Theme', 'SEO Optimization', '5 Pages', 'Mobile Responsive'],
    highlight: false
  },
  {
    name: 'Summit',
    price: '249',
    unit: 'k',
    desc: 'Designed for large travel & trekking agencies.',
    features: ['Booking Integration', 'Dynamic Itineraries', 'Unlimited Pages', 'Priority Support'],
    highlight: true
  }
];

export function Pricing() {
  return (
    <section className="py-60 bg-white overflow-hidden" id="pricing">
      <div className="container mx-auto px-6">
        <Reveal className="mb-40">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                 <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[0.625rem] mb-8 block">Investment</span>
                 <h3 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8]">
                   Transparent <br /> <span className="italic text-[#0272C9]">Value.</span>
                 </h3>
              </div>
              <div className="max-w-sm">
                 <p className="text-lg text-[#4F4543] font-light leading-relaxed mb-4">
                   Tailored investment plans for every stage of your growth—from startups to established mountain legends.
                 </p>
                 <div className="w-12 h-[0.0625rem] bg-[#0272C9]" />
              </div>
           </div>
        </Reveal>
        
        <div className="grid lg:grid-cols-3 gap-2 relative">
          {/* Decorative Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-[#191919]/[0.01] pointer-events-none select-none">
            PRICING
          </div>

          {TIERS.map((tier, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className={`relative p-12 md:p-16 h-full border ${tier.highlight ? 'bg-[#191919] text-white border-[#191919]' : 'bg-[#fcfcfc] text-[#191919] border-[#191919]/5'} group transition-all duration-700 hover:z-10`}>
                <div className="flex justify-between items-start mb-16">
                  <span className={`text-[0.625rem] font-bold uppercase tracking-[0.5em] ${tier.highlight ? 'text-[#0272C9]' : 'text-[#4F4543]'}`}>
                    /{tier.name}
                  </span>
                  {tier.highlight && (
                    <span className="px-4 py-1 bg-[#0272C9] text-white text-[0.5rem] font-bold uppercase tracking-widest rounded-full">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mb-16">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm font-bold opacity-40 uppercase">NPR</span>
                    <span className="text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-none">
                      {tier.price}<span className="text-[#0272C9]">{tier.unit}</span>
                    </span>
                  </div>
                  <p className="text-base font-light opacity-60 max-w-sm leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="space-y-4 mb-16">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs group/item">
                      <div className={`w-1 h-1 rounded-full ${tier.highlight ? 'bg-[#0272C9]' : 'bg-[#191919]'}`} />
                      <span className="opacity-60 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton className={`w-full py-6 rounded-full font-bold uppercase tracking-widest text-[0.625rem] flex items-center justify-center gap-4 transition-all ${
                  tier.highlight ? 'bg-[#0272C9] text-white' : 'bg-[#191919] text-white'
                }`}>
                  Initiate Plan <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                {/* Design Detail: Subtle Grain Overlay on dark card */}
                {tier.highlight && (
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
