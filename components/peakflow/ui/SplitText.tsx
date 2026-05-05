"use client";
import React, { useState, useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export function SplitText({ text, delay = 0, className = "", wordClassName = "", charClassName = "" }: SplitTextProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`flex flex-wrap overflow-hidden ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className={`relative inline-block mr-[0.2em] overflow-hidden ${wordClassName}`}>
          <span 
            className={`inline-block transition-transform duration-[1200ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] ${visible ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
