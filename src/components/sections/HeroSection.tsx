"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroWaveNetwork } from "@/components/visual/HeroWaveNetwork";
import { DashboardMockup } from "@/components/visual/DashboardMockup";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-b border-[var(--border-default)] bg-[radial-gradient(circle_at_84%_28%,rgba(74,27,122,0.08),transparent_32%),radial-gradient(circle_at_18%_82%,rgba(225,29,114,0.08),transparent_30%),var(--surface-1)] px-0 pb-12 pt-28 text-[var(--text-primary)] dark:bg-[radial-gradient(circle_at_72%_32%,rgba(74,27,122,0.22),transparent_42%),linear-gradient(135deg,var(--page-bg)_0%,var(--surface-1)_58%,var(--surface-2)_100%)] sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-28">
      <HeroWaveNetwork className="z-0" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-[#E11D72]/[0.05] blur-3xl" />

      <div className="relative z-20 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:col-span-5 lg:text-left"
          >
            {/* Hero Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm dark:border-[var(--border-default)] dark:bg-[var(--surface-2)]/80">
              <span className="h-2 w-2 rounded-full bg-[#E11D72]" />
              <span className="font-sora text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)]">
                AI-Native Telecom OSS/BSS &amp; Automation Platform
              </span>
            </div>

            <h1 className="font-sora text-[clamp(2.65rem,6.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.055em] text-[var(--text-primary)]">
              <span className="block">Where networks,</span>
              <span className="block">business and AI</span>
              <span className="relative inline-block text-[var(--text-accent)]">
                work together.
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#E11D72]/20" />
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-[610px] font-inter text-base leading-7 text-[var(--text-secondary)] lg:mx-0 lg:text-[17px]">
              Kashtrix brings network operations, business systems, automation and AI agents into one intelligent telecom platform—so every team works from the same operational truth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <button
                onClick={onRequestDemo}
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#2B0D3A] px-7 py-3.5 font-inter text-sm font-semibold text-white shadow-lg shadow-[#2B0D3A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A1B7A] sm:w-auto"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/platform"
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-white px-7 py-3.5 font-inter text-sm font-semibold text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-brand)] hover:bg-[var(--surface-2)] sm:w-auto"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 text-[var(--text-link)] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[var(--border-default)] pt-6 font-inter text-xs font-semibold text-[var(--text-secondary)] lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--text-link)]" />
                <span>Every System.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--text-link)]" />
                <span>One Platform.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--text-accent)]" />
                <span>Limitless Possibilities.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Particle Sphere + Dashboard Overlay */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            <div className="pointer-events-none absolute inset-8 rounded-[40px] bg-[#4A1B7A]/10 blur-3xl" />
            <div className="relative z-10 w-full">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
