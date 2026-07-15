"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Mail } from "lucide-react";

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestDemo }) => {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-[#2B0D3A] via-[#351147] to-[#4A1B7A] text-white relative overflow-hidden">
      {/* Background Flowing Line Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 400" fill="none" className="w-full h-full">
          <path
            d="M-100 200 C 300 200, 500 50, 800 50 C 1100 50, 1300 350, 1600 350"
            stroke="#F4EEFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M-100 300 C 400 300, 600 150, 900 150 C 1200 150, 1350 250, 1600 250"
            stroke="#E11D72"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#FCE7F3] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E11D72]" /> Replace Disconnected Systems Today
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-sora leading-tight tracking-tight">
          Ready to unify your networks, business, and AI into one platform?
        </h2>

        <p className="text-base sm:text-lg text-[#E8DFF0] max-w-2xl mx-auto font-normal leading-relaxed">
          Schedule a live simulation tailored to your subscriber count and multi-vendor hardware. See how Kashtrix eliminates operational friction in under 60 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFFFF] text-[#2B0D3A] font-sora font-bold text-sm hover:bg-[#F4EEFF] transition-all shadow-2xl flex items-center justify-center gap-2.5 group"
          >
            <span>Request Custom Sandbox Demo</span>
            <ArrowRight className="w-4 h-4 text-[#4A1B7A] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="mailto:info@kashtrix.com"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#4A1B7A]/60 border border-white/30 text-white font-sora font-bold text-sm hover:bg-[#4A1B7A] transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#E11D72]" /> Email info@kashtrix.com
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#E8DFF0]/90">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E11D72]" />
            <span>60-Day Risk-Free Migration Blueprint</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E11D72]" />
            <span>Zero Subscriber Downtime Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E11D72]" />
            <span>Dedicated Tier-1 Architect Assigned</span>
          </div>
        </div>
      </div>
    </section>
  );
};
