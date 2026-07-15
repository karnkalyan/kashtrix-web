"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Server, Cpu, Activity, DollarSign, Wrench, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const OVERVIEW_CARDS = [
  {
    title: "Unified OSS/BSS",
    description: "Replace disconnected Radius, rating engines, billing, and provisioning modules with one synchronized database.",
    href: "/platform",
    icon: Server,
    badge: "Core Architecture",
  },
  {
    title: "AI Automation",
    description: "Autonomous digital employees that resolve 72% of NOC tickets, rebalance BNG loads, and provision FTTH drops.",
    href: "/ai-agents",
    icon: Cpu,
    badge: "AI-Native",
    accent: true,
  },
  {
    title: "Real-Time Intelligence",
    description: "Predictive analytics over billions of optical packets, forecasting bandwidth exhaustion and churn risks.",
    href: "/network-management",
    icon: Activity,
    badge: "Sub-second Telemetry",
  },
  {
    title: "Global Payments",
    description: "Automated dunning cadences, multi-currency invoice rating, and instant IVR payment recovery gateways.",
    href: "/billing",
    icon: DollarSign,
    badge: "Zero Leakage",
  },
  {
    title: "Field Operations",
    description: "GPS technician dispatching, offline QR barcode CPE serial scanners, and automated SLA SLA credits.",
    href: "/field-operations",
    icon: Wrench,
    badge: "Mobile Dispatch",
  },
  {
    title: "Customer Experience",
    description: "White-label responsive self-care web portal and mobile app with one-click package upgrades and diagnostics.",
    href: "/crm",
    icon: Users,
    badge: "Self-Service",
  },
];

export const PlatformOverview: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 bg-[#FFFFFF] text-[#1B1024]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
            Every System. One Platform.
          </span>
          <h2 className="section-heading text-[#2B0D3A]">
            One platform for every telecom operation.
          </h2>
          <p className="text-sm md:text-base text-[#6F6078]">
            Eliminate operational friction by unifying network infrastructure, subscriber management, financial billing, and field dispatching under a single AI-powered control plane.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OVERVIEW_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "p-6 rounded-2xl border transition-all duration-300 bg-[#FFFFFF] flex flex-col justify-between relative",
                  isHovered
                    ? "border-[#4A1B7A] -translate-y-1 shadow-xl shadow-[#2B0D3A]/10"
                    : "border-[#E8DFF0]"
                )}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "p-3 rounded-xl transition-colors",
                        isHovered ? "bg-[#2B0D3A] text-white" : "bg-[#F4EEFF] text-[#4A1B7A]"
                      )}
                    >
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full",
                        card.accent
                          ? "bg-[#FCE7F3] text-[#E11D72]"
                          : "bg-[#F8F7FA] text-[#6F6078] border border-[#E8DFF0]"
                      )}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-sora text-[#2B0D3A]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#6F6078] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFF0]/60">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4A1B7A] group hover:text-[#2B0D3A]"
                  >
                    <span>Explore Module</span>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isHovered ? "translate-x-1 text-[#E11D72]" : ""
                      )}
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
