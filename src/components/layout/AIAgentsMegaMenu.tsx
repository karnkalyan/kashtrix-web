"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AI_AGENTS_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AIAgentsMegaMenuProps {
  onClose: () => void;
}

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

export const AIAgentsMegaMenu: React.FC<AIAgentsMegaMenuProps> = ({ onClose }) => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 mt-2 bg-[#FFFFFF] border border-[#E8DFF0] rounded-2xl shadow-2xl shadow-[#2B0D3A]/15 overflow-hidden z-50 max-w-7xl mx-auto p-6"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DFF0]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E11D72]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
            Autonomous Telecom Employees
          </span>
        </div>
        <Link
          href="/ai-agents"
          onClick={onClose}
          className="text-xs font-bold text-[#4A1B7A] hover:text-[#2B0D3A] flex items-center gap-1.5 transition-colors"
        >
          Explore All 8 AI Agents <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AI_AGENTS_LIST.map((agent) => {
          const Icon = ICON_MAP[agent.icon] || Activity;
          const isHovered = hoveredAgent === agent.id;

          return (
            <Link
              key={agent.id}
              href={`/ai-agents#${agent.id}`}
              onClick={onClose}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              className={cn(
                "p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between",
                isHovered
                  ? "bg-[#F8F7FA] border-[#4A1B7A] -translate-y-0.5 shadow-md"
                  : "bg-[#FFFFFF] border-[#E8DFF0]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-lg bg-[#F4EEFF] text-[#4A1B7A] transition-colors group-hover:bg-[#2B0D3A] group-hover:text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  {/* Small animated node on hover */}
                  <span className="relative flex items-center justify-center">
                    {isHovered && (
                      <span className="absolute w-2.5 h-2.5 rounded-full bg-[#E11D72] animate-ping opacity-75" />
                    )}
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        isHovered ? "bg-[#E11D72]" : "bg-[#9B82B5]/50"
                      )}
                    />
                  </span>
                </div>
                <h5 className="text-xs font-bold text-[#2B0D3A] font-sora">{agent.title}</h5>
                <p className="text-[11px] font-semibold text-[#4A1B7A] mb-1">{agent.role}</p>
                <p className="text-[11px] text-[#6F6078] line-clamp-2 leading-relaxed">
                  {agent.description}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-[#E8DFF0]/60 flex items-center justify-between text-[10px] font-bold text-[#E11D72]">
                <span>{agent.metrics}</span>
                <ArrowRight className="w-3 h-3 text-[#4A1B7A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};
