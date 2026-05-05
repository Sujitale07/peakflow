"use client";
import React from 'react';
import { Navigation } from "@/components/peakflow/sections/Navigation";
import { Footer } from "@/components/peakflow/sections/Footer";
import { SmoothScroll } from "@/components/peakflow/ui/SmoothScroll";
import { Reveal } from "@/components/peakflow/ui/Reveal";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);

  // Mock data fetching based on slug
  const post = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "May 20, 2024",
    category: "Insights",
    author: "PeakFlow Studio",
    content: `
      <p class="text-xl mb-8 leading-relaxed">The digital landscape for adventure tourism is shifting. No longer is a simple gallery of mountain peaks enough to capture the imagination of the modern explorer. Today, we bridge the gap between physical heritage and digital innovation.</p>
      <h2 class="text-4xl font-display font-bold mt-16 mb-8 tracking-tighter">The New Standard of Performance</h2>
      <p class="mb-8 leading-relaxed">When we speak of performance, we aren't just talking about load times—though they are critical in low-bandwidth mountain regions. We are talking about the performance of the brand itself. How does the site breathe? How does it move?</p>
      <blockquote class="border-l-4 border-[#0272C9] pl-8 my-12 italic text-2xl font-light text-[#191919]/60">
        "We don't build websites. We build digital landmarks that stand as a testament to the brand's vision."
      </blockquote>
      <p class="mb-8 leading-relaxed">Our approach combines high-end visual storytelling with precision engineering. Every pixel is calculated to inspire trust and ignite the desire for adventure.</p>
    `
  };

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#0272C9] selection:text-white">
      <Navigation />
      
      <SmoothScroll>
        <article className="pt-60 pb-40">
          <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
              <Link href="/blog" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#191919]/40 hover:text-[#0272C9] transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Journal
              </Link>
              
              <div className="flex items-center gap-6 mb-8">
                <span className="text-[10px] font-bold text-[#0272C9] uppercase tracking-[0.3em]">{post.category}</span>
                <span className="w-10 h-[1px] bg-[#191919]/10" />
                <span className="text-[10px] font-bold text-[#191919]/30 uppercase tracking-[0.3em]">{post.date}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-[#191919] tracking-tighter leading-[0.9] mb-12">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-20 border-b border-[#191919]/5 pb-12">
                <div className="w-12 h-12 rounded-full bg-[#191919] flex items-center justify-center text-white font-bold text-xs">PF</div>
                <div>
                  <span className="block text-sm font-bold text-[#191919]">{post.author}</span>
                  <span className="text-xs text-[#191919]/40 font-medium">Design Strategist</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div 
                className="prose prose-xl prose-neutral max-w-none text-[#4F4543]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Reveal>
          </div>
        </article>

        <Footer />
      </SmoothScroll>
    </main>
  );
}
