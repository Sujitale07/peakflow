"use client";
import React from 'react';
import { Navigation } from "@/components/peakflow/sections/Navigation";
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Reveal } from "@/components/peakflow/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const POSTS = [
  {
    slug: 'future-of-adventure-tourism',
    date: "May 20, 2024",
    title: "The Future of Adventure Tourism Websites",
    category: "Insights",
    readTime: "5 min read"
  },
  {
    slug: 'wordpress-hospitality-king',
    date: "April 15, 2024",
    title: "Why WordPress is Still King for Hospitality Brands",
    category: "Technical",
    readTime: "8 min read"
  },
  {
    slug: 'design-for-peaks',
    date: "March 10, 2024",
    title: "Design for the Peaks: Balancing Speed and Visuals",
    category: "Design",
    readTime: "6 min read"
  },
  {
    slug: 'digital-landmarks-presence',
    date: "February 28, 2024",
    title: "Digital Landmarks: Defining Global Digital Presence",
    category: "Studio",
    readTime: "4 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#0272C9] selection:text-white">
      <Navigation />
      
      <SmoothScroll>
        <section className="pt-60 pb-40">
          <div className="container mx-auto px-6">
            <Reveal className="mb-40">
              <span className="text-[#0272C9] font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Journal</span>
              <h1 className="text-7xl md:text-8xl font-display font-bold text-[#191919] tracking-tighter leading-[0.8] mb-12">
                Digital <br /> <span className="italic text-[#0272C9]">Thinking.</span>
              </h1>
            </Reveal>
            
            <div className="flex flex-col border-t border-[#191919]/10">
              {POSTS.map((post, i) => (
                <Reveal key={i} delay={i * 100}>
                  <Link href={`/blog/${post.slug}`} className="group relative py-20 border-b border-[#191919]/10 hover:bg-[#fcfcfc] transition-colors cursor-pointer px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 block">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-6 mb-6">
                        <span className="text-[10px] font-bold text-[#0272C9] uppercase tracking-widest">{post.category}</span>
                        <span className="text-[10px] font-bold text-[#191919]/30 uppercase tracking-widest">{post.date}</span>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-[#191919] tracking-tighter leading-tight group-hover:text-[#0272C9] transition-colors">
                        {post.title}
                      </h2>
                    </div>
                    
                    <div className="flex flex-col items-end gap-6">
                       <span className="text-sm font-medium text-[#191919]/40 italic">{post.readTime}</span>
                       <div className="w-16 h-16 rounded-full border border-[#191919]/10 flex items-center justify-center group-hover:bg-[#191919] group-hover:text-white transition-all transform group-hover:rotate-45">
                          <ArrowRight className="w-6 h-6" />
                       </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
