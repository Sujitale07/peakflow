"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

import Link from 'next/link';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const checkDarkBg = () => {
    setScrolled(window.scrollY > 50);

    // Check dark sections marked with data-theme="dark"
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    let overDark = false;
    darkSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 90 && rect.bottom >= 0) {
        overDark = true;
      }
    });

    // Fallback: check main element computed background luminance
    if (!overDark) {
      const mainEl = document.querySelector('main');
      if (mainEl) {
        const mainBg = window.getComputedStyle(mainEl).backgroundColor;
        const match = mainBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          const [, r, g, b] = match.map(Number);
          const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
          if (luminance < 0.2) overDark = true;
        }
      }
    }

    setIsDarkBg(overDark);
  };

  // Re-run dark check on every route change (pathname)
  useEffect(() => {
    // Delay slightly to let the new page DOM fully paint
    const timer = setTimeout(checkDarkBg, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', checkDarkBg);
    return () => window.removeEventListener('scroll', checkDarkBg);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Method', href: '/#process' },
  ];

  const isLightText = isDarkBg && !scrolled;

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-white/90 backdrop-blur-md border-b border-[#191919]/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className={`container mx-auto px-6 flex justify-between items-center transition-colors duration-500 ${
          isLightText ? 'text-white' : 'text-[#191919]'
        }`}>
          <Link href="/" className="flex items-center gap-2 group">
              {/* <img src="/logo.png" alt="PeakFlow Web Studio Logo" className="h-14 overflow-hidden transition-transform duration-500" /> */}
              <span className="text-2xl font-display font-bold">PeakFlow Studio<span className="text-[#0272C9]">.</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest hover:text-[#0272C9] transition-colors relative group z-[10001] pointer-events-auto"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[0.125rem] bg-[#0272C9] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <MagneticButton className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest group overflow-hidden transition-all duration-500 ${
              isLightText ? 'bg-white text-[#191919]' : 'bg-[#191919] text-white'
            }`}>
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-[#0272C9] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </MagneticButton>
          </nav>

          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[9] bg-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${mobileMenuOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'}`}>
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
