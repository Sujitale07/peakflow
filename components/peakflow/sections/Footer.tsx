"use client";
import React from 'react';

export function Footer() {
  return (
    <footer className="py-20 bg-[#FFFFFF] border-t border-[#0A0A0A]/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-md">
            <div className="text-3xl font-display font-bold text-[#0A0A0A] mb-4">
              Arclyn<span className="text-[#C49A45]">.</span>
            </div>
            <p className="text-[#6B6F6A] font-light font-body leading-relaxed">
              Websites, web apps, and white-label development for travel, local business, and the agencies that serve them.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">Contact</span>
              <a href="mailto:hello@arclyn.studio" className="text-[#6B6F6A] hover:text-[#C49A45] transition-colors">hello@arclyn.studio</a>
              <a href="#" className="text-[#6B6F6A] hover:text-[#C49A45] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-[#0A0A0A]/5 text-center">
          <span className="text-[10rem] md:text-[15rem] font-display font-bold text-[#0A0A0A]/[0.03] select-none tracking-tighter overflow-hidden block">ARCLYN</span>
        </div>
      </div>
    </footer>
  );
}
