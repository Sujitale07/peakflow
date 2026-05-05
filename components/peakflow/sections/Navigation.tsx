"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

import Link from 'next/link';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Method', href: '/#process' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
          scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-[#191919]/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="PeakFlow Web Studio Logo" className="h-14 overflow-hidden transition-transform duration-500" />
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-[#191919] hover:text-[#0272C9] transition-colors relative group z-[10001] pointer-events-auto"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0272C9] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <MagneticButton className="px-6 py-3 bg-[#191919] text-white rounded-full text-xs font-bold uppercase tracking-widest group overflow-hidden">
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-[#0272C9] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </MagneticButton>
          </nav>

          <button 
            className="lg:hidden text-[#191919]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[10000] bg-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${mobileMenuOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'}`}>
        <div className="p-8 flex justify-between items-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display font-bold text-[#191919]">PeakFlow<span className="text-[#0272C9]">.</span></Link>
          <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-5xl md:text-7xl font-display font-bold text-[#191919] hover:text-[#0272C9] transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
