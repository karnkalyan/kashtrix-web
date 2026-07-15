"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Target, Users2 } from "lucide-react";
import { SOLUTIONS_MEGA } from "@/lib/constants";

interface SolutionsMegaMenuProps {
  onClose: () => void;
}

export const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 mt-2 bg-[#FFFFFF] border border-[#E8DFF0] rounded-2xl shadow-2xl shadow-[#2B0D3A]/15 overflow-hidden z-50 max-w-7xl mx-auto p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* By Provider Type */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
            <Building2 className="w-4 h-4 text-[#4A1B7A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
              By Provider Type
            </span>
          </div>
          <ul className="space-y-3">
            {SOLUTIONS_MEGA.providerType.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block p-2 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1B1024] group-hover:text-[#4A1B7A]">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                  </div>
                  <p className="text-[11px] text-[#6F6078] mt-0.5 line-clamp-1">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* By Business Need */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
            <Target className="w-4 h-4 text-[#4A1B7A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
              By Business Need
            </span>
          </div>
          <ul className="space-y-3">
            {SOLUTIONS_MEGA.businessNeed.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block p-2 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1B1024] group-hover:text-[#4A1B7A]">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                  </div>
                  <p className="text-[11px] text-[#6F6078] mt-0.5 line-clamp-1">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* By Team */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
            <Users2 className="w-4 h-4 text-[#E11D72]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
              By Team
            </span>
          </div>
          <ul className="space-y-3">
            {SOLUTIONS_MEGA.byTeam.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block p-2 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1B1024] group-hover:text-[#4A1B7A]">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                  </div>
                  <p className="text-[11px] text-[#6F6078] mt-0.5 line-clamp-1">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
