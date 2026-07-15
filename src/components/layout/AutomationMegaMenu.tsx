"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wifi, PhoneCall, Workflow } from "lucide-react";
import { AUTOMATION_SUBSECTIONS } from "@/lib/constants";

interface AutomationMegaMenuProps {
  onClose: () => void;
}

export const AutomationMegaMenu: React.FC<AutomationMegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 mt-2 bg-[#FFFFFF] border border-[#E8DFF0] rounded-2xl shadow-2xl shadow-[#2B0D3A]/15 overflow-hidden z-50 max-w-7xl mx-auto p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Network Automation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
              <Wifi className="w-4 h-4 text-[#4A1B7A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
                Network Automation
              </span>
            </div>
            <ul className="space-y-2">
              {AUTOMATION_SUBSECTIONS.network.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1B1024] group-hover:text-[#4A1B7A]">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware Automation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
              <Cpu className="w-4 h-4 text-[#4A1B7A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
                Hardware Automation
              </span>
            </div>
            <ul className="space-y-2">
              {AUTOMATION_SUBSECTIONS.hardware.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1B1024] group-hover:text-[#4A1B7A]">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Voice Automation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
              <PhoneCall className="w-4 h-4 text-[#E11D72]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
                Voice Automation
              </span>
            </div>
            <ul className="space-y-2">
              {AUTOMATION_SUBSECTIONS.voice.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1B1024] group-hover:text-[#4A1B7A]">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Automation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E8DFF0]">
              <Workflow className="w-4 h-4 text-[#4A1B7A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
                Workflow Automation
              </span>
            </div>
            <ul className="space-y-2">
              {AUTOMATION_SUBSECTIONS.workflow.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F8F7FA] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#1B1024] group-hover:text-[#4A1B7A]">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#4A1B7A]" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Panel */}
        <div className="md:col-span-3 rounded-xl bg-[#F8F7FA] border border-[#E8DFF0] p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#F4EEFF] text-[#4A1B7A]">
              Multi-Vendor Core
            </span>
            <h4 className="text-base font-bold text-[#2B0D3A] font-sora">
              Create automation for any supported platform
            </h4>
            <p className="text-xs text-[#6F6078] leading-relaxed">
              Drag-and-drop actions, pre-commit validation regex, and rollback loops for over 450 network vendor operating systems.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/network-automation"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs hover:bg-[#4A1B7A] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Explore Automation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
