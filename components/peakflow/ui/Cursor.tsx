"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      // Smooth movement for cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });

      // Lagged movement for follower
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Sticky effect for buttons and links
      if (target.closest('button') || target.closest('a')) {
        gsap.to(follower, {
          scale: 3,
          backgroundColor: "rgba(2, 114, 201, 0.1)",
          borderColor: "#0272C9",
          duration: 0.3
        });
      }

      // Special effect for portfolio items
      if (target.closest('.portfolio-item') || target.closest('.project-img-wrapper')) {
        setCursorText("VIEW");
        gsap.to(follower, {
          scale: 4,
          backgroundColor: "#0272C9",
          borderColor: "#0272C9",
          duration: 0.3
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.project-card')) {
        setCursorText("");
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(25, 25, 25, 0.2)",
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#0272C9] rounded-full pointer-events-none z-[10000001] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      {/* Large Follower */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#191919]/20 rounded-full pointer-events-none z-[10000001] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        <span className="text-[0.375rem] font-black text-white tracking-widest">{cursorText}</span>
      </div>
    </>
  );
}
