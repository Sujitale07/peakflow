"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", strength = 40, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      gsap.to(el, {
        x: x * 0.4,
        y: y * 0.4,
        rotateX: -y * 0.1,
        rotateY: x * 0.1,
        duration: 0.6,
        ease: "power2.out"
      });
      
      gsap.to(textEl, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.to(textEl, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={ref} 
      className={`relative group flex items-center justify-center will-change-transform ${className}`} 
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      <div 
        ref={textRef} 
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </div>
    </button>
  );
}
