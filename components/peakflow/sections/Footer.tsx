"use client";
import React from 'react';

export function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#191919]/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-3xl font-display font-bold text-[#191919] mb-4">
              PeakFlow<span className="text-[#0272C9]">.</span>
            </div>
            <p className="text-[#4F4543] font-light">© 2024 PeakFlow Web Studio. Built with passion in Nepal.</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#191919]">Navigation</span>
              <a href="#" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">Home</a>
              <a href="/services" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">Services</a>
              <a href="/case-studies" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">Case Studies</a>
              <a href="/blog" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">Blog</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#191919]">Connect</span>
              <a href="#" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">Instagram</a>
              <a href="#" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#4F4543] hover:text-[#0272C9] transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-[#191919]/5 text-center">
          <span className="text-[10vw] font-display font-bold text-[#191919]/[0.03] select-none tracking-tighter">PEAKFLOW STUDIO</span>
        </div>
      </div>
    </footer>
  );
}
