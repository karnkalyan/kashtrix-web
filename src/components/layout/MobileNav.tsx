"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { PLATFORM_COLUMNS, AUTOMATION_SUBSECTIONS, SOLUTIONS_MEGA, AI_AGENTS_LIST, RESOURCES_MEGA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "@/components/visual/AnimatedLogo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDemo: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onRequestDemo }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#09050F]/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FFFFFF] border-l border-[#E8DFF0] shadow-2xl z-50 flex flex-col justify-between overflow-hidden lg:hidden text-[#1B1024]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFF0] bg-[#F8F7FA]">
              <AnimatedLogo size="sm" />
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#2B0D3A] hover:bg-[#E8DFF0] transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {/* Accordion 1: Platform */}
              <div className="border-b border-[#E8DFF0] pb-3">
                <button
                  onClick={() => toggleAccordion("platform")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#2B0D3A] font-inter"
                >
                  <span>Platform</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openAccordion === "platform" ? "rotate-180 text-[#E11D72]" : "")} />
                </button>
                {openAccordion === "platform" && (
                  <div className="pl-3 py-2 space-y-4 text-xs">
                    {PLATFORM_COLUMNS.map((col) => (
                      <div key={col.title} className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase text-[#4A1B7A] tracking-wider block">
                          {col.title}
                        </span>
                        {col.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="block py-1 text-[#6F6078] hover:text-[#2B0D3A] font-medium"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2: Automation */}
              <div className="border-b border-[#E8DFF0] pb-3">
                <button
                  onClick={() => toggleAccordion("automation")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#2B0D3A] font-inter"
                >
                  <span>Automation</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openAccordion === "automation" ? "rotate-180 text-[#E11D72]" : "")} />
                </button>
                {openAccordion === "automation" && (
                  <div className="pl-3 py-2 space-y-2 text-xs">
                    <Link href="/network-automation" onClick={onClose} className="block py-1.5 font-bold text-[#4A1B7A]">
                      → Network Automation (BNG, Radius, QoS)
                    </Link>
                    <Link href="/hardware-automation" onClick={onClose} className="block py-1.5 font-bold text-[#4A1B7A]">
                      → Hardware Orchestration (Cisco, Huawei, Nokia)
                    </Link>
                    <Link href="/voice-automation" onClick={onClose} className="block py-1.5 font-bold text-[#4A1B7A]">
                      → Voice AI Calls &amp; IVR
                    </Link>
                    <Link href="/api-platform" onClick={onClose} className="block py-1.5 font-bold text-[#4A1B7A]">
                      → API &amp; Webhooks Orchestration
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 3: Solutions */}
              <div className="border-b border-[#E8DFF0] pb-3">
                <button
                  onClick={() => toggleAccordion("solutions")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#2B0D3A] font-inter"
                >
                  <span>Solutions &amp; Industries</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openAccordion === "solutions" ? "rotate-180 text-[#E11D72]" : "")} />
                </button>
                {openAccordion === "solutions" && (
                  <div className="pl-3 py-2 space-y-2 text-xs">
                    {SOLUTIONS_MEGA.providerType.map((item) => (
                      <Link key={item.title} href={item.href} onClick={onClose} className="block py-1 text-[#6F6078] hover:text-[#2B0D3A]">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 4: AI Agents */}
              <div className="border-b border-[#E8DFF0] pb-3">
                <button
                  onClick={() => toggleAccordion("ai")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#2B0D3A] font-inter"
                >
                  <span className="flex items-center gap-1.5">
                    AI Agents <span className="w-1.5 h-1.5 rounded-full bg-[#E11D72] animate-pulse" />
                  </span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openAccordion === "ai" ? "rotate-180 text-[#E11D72]" : "")} />
                </button>
                {openAccordion === "ai" && (
                  <div className="pl-3 py-2 space-y-2 text-xs">
                    {AI_AGENTS_LIST.map((agent) => (
                      <Link key={agent.id} href={`/ai-agents#${agent.id}`} onClick={onClose} className="block py-1 text-[#6F6078] hover:text-[#2B0D3A] font-medium">
                        {agent.title} — <span className="text-[#4A1B7A]">{agent.role}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <div className="pt-2 space-y-3 font-inter text-sm font-medium">
                <Link href="/pricing" onClick={onClose} className="block py-1 text-[#2B0D3A]">
                  Pricing
                </Link>
                <Link href="/documentation" onClick={onClose} className="block py-1 text-[#2B0D3A]">
                  Documentation &amp; Resources
                </Link>
                <Link href="/about" onClick={onClose} className="block py-1 text-[#2B0D3A]">
                  About Kashtrix
                </Link>
                <Link href="/contact" onClick={onClose} className="block py-1 text-[#2B0D3A]">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Persistent CTA Footer */}
            <div className="p-6 border-t border-[#E8DFF0] bg-[#F8F7FA] space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onRequestDemo();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#2B0D3A] text-white font-inter font-semibold text-xs hover:bg-[#4A1B7A] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#E11D72]" /> Request Custom Demo
              </button>
              <Link
                href="/login"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFFFFF] border border-[#E8DFF0] text-[#2B0D3A] font-inter font-semibold text-xs hover:bg-[#F4EEFF] transition-all flex items-center justify-center gap-1"
              >
                Sign In to Platform <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
