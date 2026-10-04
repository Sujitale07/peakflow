"use client";
import React, { useState } from 'react';
import { Navigation } from "@/components/peakflow/sections/Navigation";
import { Hero } from "@/components/peakflow/sections/Hero";
import { About } from "@/components/peakflow/sections/About";
import { Services } from "@/components/peakflow/sections/Services";
import { Portfolio } from "@/components/peakflow/sections/Portfolio";
import { Process } from "@/components/peakflow/sections/Process";
import { Pricing } from "@/components/peakflow/sections/Pricing";
import { Testimonials } from "@/components/peakflow/sections/Testimonials";
import { Contact } from "@/components/peakflow/sections/Contact";
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Cursor } from "@/components/peakflow/ui/Cursor";
import { Grain } from "@/components/peakflow/ui/Grain";
import { ScrollProgress } from "@/components/peakflow/ui/ScrollProgress";
import { Loader } from "@/components/peakflow/ui/Loader";
import { Marquee } from "@/components/peakflow/ui/Marquee";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#FFFFFF] min-h-screen font-sans selection:bg-[#C49A45] selection:text-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        body {
          background-color: #FFFFFF;
          color: #0A0A0A;
          font-family: 'Outfit', sans-serif;
          cursor: none;
        }

        .font-display {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .font-body {
          font-family: 'Instrument Sans', sans-serif;
        }

        * {
          cursor: none !important;
        }

        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto;
        }
        .lenis.lenis-stopped {
          overflow: hidden;
        }
      `}} />
      
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <SmoothScroll>
        <Hero />
        <About />
        
        <div className="py-20 border-y border-[#0A0A0A]/5 space-y-10">
          <Marquee 
            items={["WordPress", "Nepal Tourism", "Trekking", "Hotel Design", "Performance", "Pokhara"]} 
            speed={1.2}
          />
          <Marquee 
            items={["UX Strategy", "Brand Systems", "CMS Training", "SEO Mastery", "Cloud Hosting"]} 
            direction={-1}
            speed={1.5}
          />
        </div>

        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </SmoothScroll>
    </main>
  );
}
