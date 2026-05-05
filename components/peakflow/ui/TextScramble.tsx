"use client";
import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  play: boolean;
  className?: string;
}

export function TextScramble({ text, play, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState<string>('');
  const chars = '!<>-_\\/[]{}—=+*^?#_';
  
  useEffect(() => {
    if (!play) return;
    
    let frame = 0;
    const queue = text.split('').map((char) => ({
      from: '',
      to: char,
      start: char === ' ' ? 0 : Math.floor(Math.random() * 40),
      end: char === ' ' ? 0 : Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40),
      char: ''
    }));

    let animationFrame: number;
    const update = () => {
      let output = '';
      let complete = 0;
      for (let i = 0, n = queue.length; i < n; i++) {
        let { to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span style="opacity:0.4">${char}</span>`;
        } else {
          output += '';
        }
      }
      
      setDisplayText(output);
      
      if (complete === queue.length) {
        cancelAnimationFrame(animationFrame);
      } else {
        frame++;
        animationFrame = requestAnimationFrame(update);
      }
    };

    update();
    return () => cancelAnimationFrame(animationFrame);
  }, [text, play]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: displayText || '&nbsp;' }} />;
}
