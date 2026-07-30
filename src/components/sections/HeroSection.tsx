"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Network,
  Activity,
  ShieldCheck,
  Bot,
  Zap,
} from "lucide-react";
import { HeroWaveNetwork } from "@/components/visual/HeroWaveNetwork";
import { DashboardMockup } from "@/components/visual/DashboardMockup";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

const TYPEWRITER_PHRASES = [
  "converge.",
  "automate.",
  "scale.",
  "self-heal.",
  "comply.",
  "accelerate.",
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const speed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1900);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-b border-[var(--border-default)] bg-[var(--page-bg)] px-0 pb-16 pt-24 text-[var(--text-primary)] sm:pb-20 sm:pt-28">
      
      {/* Background Animated Canvas Wave (Intact) */}
      <HeroWaveNetwork className="z-0" />
      
      {/* Ambient Radial Backdrops */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-600/15 via-pink-500/15 to-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-cyan-500/15 via-emerald-500/15 to-indigo-600/10 blur-[130px]" />

      <div className="relative z-20 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          
          {/* Left Column: Asymmetric Command Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:col-span-5 lg:text-left z-10"
          >
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-[var(--surface-1)]/90 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-purple-500/40 dark:bg-[var(--surface-2)]/90">
              <span className="h-2 w-2 rounded-full bg-[#E11D72] animate-pulse shadow-[0_0_10px_#E11D72]" />
              <span className="font-sora text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)]">
                Two Products · One Telecom Operating System
              </span>
            </div>

            <h1 className="font-inter text-[clamp(2.4rem,4.8vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--text-primary)]">
              <span className="block">Where <span className="text-[#E11D72]">Networks</span>, <span className="text-[#E11D72]">Business</span>,</span>
              <span className="block">and <span className="text-[#E11D72]">AI Work</span> Together.</span>
              <span className="relative block mt-2 min-h-[1.25em]">
                <span className="font-poppins font-normal text-[#E11D72]">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-[#E11D72] animate-pulse align-middle" />
                <span className="absolute -bottom-1.5 left-0 h-1 w-56 rounded-full bg-[#E11D72] opacity-60 lg:left-0" />
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl font-inter text-base leading-7 text-[var(--text-secondary)] lg:mx-0 sm:text-lg sm:leading-8">
              <strong className="text-[var(--text-primary)]">Kashtrix OSS/BSS</strong> unifies NOC, billing, FreeRADIUS AAA, CRM, and AI agents. <strong className="text-[var(--text-primary)]">Kashtrix Syslog</strong> delivers carrier-grade log collection with CGNAT law compliance.
            </p>

            {/* Action Buttons — single row, 2 buttons only */}
            <div className="mt-8 flex flex-row items-center justify-center gap-3 lg:justify-start">
              <button
                onClick={onRequestDemo}
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-[#E11D72] px-7 py-3 font-sora text-sm font-semibold text-white shadow-xl shadow-[#E11D72]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F02C82]"
              >
                <span className="whitespace-nowrap">Request Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/platform"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-1)] px-7 py-3 font-inter text-sm font-semibold text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-[var(--surface-2)]"
              >
                <span className="whitespace-nowrap">Explore Platform</span>
                <ArrowRight className="h-4 w-4 text-purple-500 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Live Telemetry Ticker Strip — single row */}
            <div className="mt-8 flex flex-nowrap items-center justify-center gap-2.5 overflow-x-auto font-inter text-[11px] font-semibold text-[var(--text-secondary)] lg:justify-start">
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--surface-1)]/80 px-3 py-1.5 shadow-xs backdrop-blur-sm">
                <Activity className="h-3 w-3 text-purple-500" />
                <span className="whitespace-nowrap">100K+ Syslog</span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--surface-1)]/80 px-3 py-1.5 shadow-xs backdrop-blur-sm">
                <Network className="h-3 w-3 text-cyan-500" />
                <span className="whitespace-nowrap">99.998% Uptime</span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--surface-1)]/80 px-3 py-1.5 shadow-xs backdrop-blur-sm">
                <ShieldCheck className="h-3 w-3 text-emerald-500" />
                <span className="whitespace-nowrap">CGNAT Compliant</span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--surface-1)]/80 px-3 py-1.5 shadow-xs backdrop-blur-sm">
                <Bot className="h-3 w-3 text-pink-500" />
                <span className="whitespace-nowrap">8 AI Agents</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Command Matrix Portal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-7"
          >
            {/* Multi-Layer Ambient Glow Frame */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-purple-600/25 via-pink-500/20 to-cyan-500/25 opacity-80 blur-2xl" />

            {/* Native React UI Component Portal */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-1)] shadow-2xl">
              <DashboardMockup />
            </div>

            {/* Floating Live Indicator Badge */}
            <div className="absolute -bottom-5 -left-5 z-30 hidden sm:flex items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--surface-1)]/95 p-3.5 shadow-2xl backdrop-blur-xl">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Zap className="h-5 w-5 animate-bounce" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sora text-xs font-bold text-[var(--text-primary)]">Autonomous NOC Matrix</span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">ACTIVE</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)]">Zero human intervention required</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
