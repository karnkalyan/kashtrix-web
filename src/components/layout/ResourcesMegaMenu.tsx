"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Terminal, Shield, HelpCircle } from "lucide-react";
import { RESOURCES_MEGA } from "@/lib/constants";

interface ResourcesMegaMenuProps {
  onClose: () => void;
}

export const ResourcesMegaMenu: React.FC<ResourcesMegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 mt-2 bg-[#FFFFFF] border border-[#E8DFF0] rounded-2xl shadow-2xl shadow-[#2B0D3A]/15 overflow-hidden z-50 max-w-7xl mx-auto p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {RESOURCES_MEGA.map((item, index) => {
          const icons = [BookOpen, Terminal, Shield, HelpCircle];
          const Icon = icons[index % icons.length];

          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className="group block p-3 rounded-xl border border-[#E8DFF0]/70 hover:border-[#4A1B7A] hover:bg-[#F8F7FA] transition-all"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[#F4EEFF] text-[#4A1B7A] group-hover:bg-[#2B0D3A] group-hover:text-white transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#2B0D3A] font-sora group-hover:text-[#4A1B7A] transition-colors">
                    {item.title}
                  </h5>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A] -translate-x-1 group-hover:translate-x-0" />
              </div>
              <p className="text-[11px] text-[#6F6078] line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-[#E8DFF0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-[#6F6078]">
          Looking for custom integration support? Our NOC solutions architects are available 24/7/365.
        </span>
        <Link
          href="/contact"
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-[#2B0D3A] text-white font-bold hover:bg-[#4A1B7A] transition-colors shrink-0"
        >
          Talk to a Network Architect
        </Link>
      </div>
    </motion.div>
  );
};
