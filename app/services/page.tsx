"use client";
import React from 'react';
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Reveal } from "@/components/peakflow/ui/Reveal";
import { MagneticButton } from "@/components/peakflow/ui/MagneticButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const DETAILED_SERVICES = [
  {
    title: "Adventure & Tourism",
    desc: "Bespoke WordPress solutions designed specifically for the unique needs of trekking agencies and travel operators in the Himalayas.",
    features: ["Dynamic Itinerary Builders", "Booking System Integration", "Interactive Route Maps", "Multi-language Support"]
  },
  {
    title: "Boutique Hospitality",
    desc: "Immersive digital experiences that capture the essence of your hotel or resort, focusing on visual storytelling and conversion.",
    features: ["Direct Booking Optimization", "High-End Visual Galleries", "Amenity Showcases", "Concierge Dashboards"]
  },
  {
    title: "Performance Branding",
    desc: "End-to-end digital identity systems that go beyond just a logo, building a cohesive language for your brand across all touchpoints.",
    features: ["Visual Identity Design", "UX Strategy", "Performance Audits", "Scalable Design Systems"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#0272C9] selection:text-white">
      
      <SmoothScroll>
        {/* Hero Section */}
        <section data-theme="dark" className="pt-60 pb-40 bg-[#191919] text-white">
          <div className="container mx-auto px-6">
            <Reveal>
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Our Expertise</span>
              <h1 className="text-7xl md:text-8xl font-display font-bold tracking-tighter leading-[0.8] mb-12">
                Strategic <br /> <span className="italic text-[#0272C9]">Capabilities.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                We bridge the gap between mountain heritage and digital innovation, delivering precision-engineered solutions for the bold.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-40">
          <div className="container mx-auto px-6">
            <div className="space-y-40">
              {DETAILED_SERVICES.map((service, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-20 items-start">
                  <Reveal direction={i % 2 === 0 ? "right" : "left"}>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-[#191919] tracking-tighter leading-tight mb-8">
                      {service.title}
                    </h2>
                    <p className="text-xl text-[#4F4543] font-light leading-relaxed mb-12">
                      {service.desc}
                    </p>
                    <MagneticButton className="px-12 py-6 bg-[#191919] text-white rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-[#0272C9] transition-all">
                      Inquire <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </Reveal>
                  
                  <Reveal delay={200} className="grid sm:grid-cols-2 gap-8 pt-10 lg:pt-20">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="p-8 border border-[#191919]/5 rounded-2xl hover:border-[#0272C9]/20 transition-colors group">
                        <CheckCircle2 className="w-6 h-6 text-[#0272C9] mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-lg font-bold text-[#191919]">{feature}</h4>
                      </div>
                    ))}
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
