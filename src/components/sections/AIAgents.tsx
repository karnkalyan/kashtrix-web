"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Headset,
  CreditCard,
  Activity,
  DollarSign,
  Briefcase,
  PhoneCall,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { AI_AGENTS_LIST } from "@/lib/constants";
import { AITaskFlow } from "./AITaskFlow";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Headset,
  CreditCard,
  Activity,
  DollarSign,
  Briefcase,
  PhoneCall,
  Cpu,
};

export const AIAgents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(AI_AGENTS_LIST[3].id); // Default to NOC AI

  return (
    <section className="w-full bg-[#FFFFFF] py-20 text-[#1B1024] dark:bg-[#09050F] dark:text-white md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCE7F3] text-[#E11D72]">
            <Sparkles className="w-3.5 h-3.5" /> Autonomous Workforce
          </span>
          <h2 className="section-heading text-[#2B0D3A]">
            AI employees for every telecom department.
          </h2>
          <p className="text-sm md:text-base text-[#6F6078]">
            Kashtrix AI Agents aren&apos;t generic chatbots. They are specialized domain experts trained on telecom RFC standards, optical engineering formulas, and real-time OSS/BSS schemas.
          </p>
        </div>

        {/* Tab Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {AI_AGENTS_LIST.map((agent) => {
            const Icon = ICON_MAP[agent.icon] || Activity;
            const isActive = activeTab === agent.id;

            return (
              <button
                key={agent.id}
                onClick={() => setActiveTab(agent.id)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-xs font-semibold font-inter transition-all duration-200 flex items-center gap-2",
                  isActive
                    ? "bg-[#2B0D3A] text-white shadow-md shadow-[#2B0D3A]/20 scale-102"
                    : "bg-[#F8F7FA] text-[#1B1024] border border-[#E8DFF0] hover:bg-[#F4EEFF] hover:border-[#4A1B7A] dark:border-[#342044] dark:bg-[#120819] dark:text-white dark:hover:bg-[#1A0D24]"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-[#FCE7F3]" : "text-[#4A1B7A]")} />
                <span>{agent.title}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D72] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Agent Overview Box */}
        <div className="mb-14">
          {AI_AGENTS_LIST.map((agent) => {
            if (agent.id !== activeTab) return null;
            const Icon = ICON_MAP[agent.icon] || Activity;

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-[#E8DFF0] bg-gradient-to-br from-[#F8F7FA] via-[#FFFFFF] to-[#F4EEFF]/60 p-6 shadow-sm dark:border-[#342044] dark:from-[#120819] dark:via-[#120819] dark:to-[#1A0D24] md:grid-cols-12 md:p-8"
              >
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#2B0D3A] text-white">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-sora text-[#2B0D3A]">{agent.title}</h3>
                      <span className="text-xs font-semibold text-[#4A1B7A] uppercase tracking-wider">
                        {agent.role}
                      </span>
                    </div>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-[#1B1024] dark:text-[#E8DFF0]">
                    {agent.description} Operates 24/7/365 across multiple regional data centers, verifying network changes before commit to ensure zero customer downtime.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l border-[#E8DFF0] pt-4 md:pt-0 md:pl-6 space-y-2">
                  <span className="text-xs font-bold text-[#6F6078] uppercase">Primary Impact Metric</span>
                  <span className="text-2xl md:text-3xl font-bold font-space text-[#E11D72]">
                    {agent.metrics}
                  </span>
                  <span className="text-[11px] text-[#6F6078]">Verified across 500k+ circuits</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded AITaskFlow */}
        <AITaskFlow key={activeTab} agentId={activeTab} />
      </div>
    </section>
  );
};
