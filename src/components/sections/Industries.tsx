"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wifi, Server, Radio, Tv, PhoneCall, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const INDUSTRIES_LIST = [
  {
    id: "isps",
    title: "Internet Service Providers (ISPs)",
    icon: Wifi,
    desc: "Automated subscriber Radius authentication, high-concurrency BNG load balancing, and automated billing collections.",
    metrics: "+45% Faster Cash Collection",
    features: ["PPPoE/DHCP Zero-Touch", "Automated Dunning & Pay Links", "Instant OLT Diagnostic Buttons"],
  },
  {
    id: "ftth",
    title: "FTTH & GPON Operators",
    icon: Server,
    desc: "Complete optical terminal provisioning across Cisco, Huawei MA5800, and Nokia ISAM/ISAM FX with fiber GIS outage mapping.",
    metrics: "Sub-Second Provisioning",
    features: ["TR-069 / USP Auto-Config", "Real-Time Optical Loss Tests", "Fiber GIS Topology Outage Maps"],
  },
  {
    id: "wireless",
    title: "Wireless Operators (WISPs)",
    icon: Radio,
    desc: "Sector capacity monitoring, Cambium/Ubiquiti API integration, and automated subscriber bandwidth shaping during peak hours.",
    metrics: "Zero Congestion Drops",
    features: ["Dynamic QoS Priority Queueing", "Wireless Tower Health Polling", "Automated Speed Boost Upsells"],
  },
  {
    id: "cable",
    title: "Cable Operators (DOCSIS)",
    icon: Tv,
    desc: "Automated CMTS channel bonding verification, modem configuration file generation, and real-time signal-to-noise alerting.",
    metrics: "99.999% CMTS Uptime",
    features: ["DOCSIS 3.1/4.0 Orchestration", "RF Signal Degradation Alarms", "Automated CPE Firmware Push"],
  },
  {
    id: "voip",
    title: "VoIP & SIP Providers",
    icon: PhoneCall,
    desc: "Real-time Call Detail Record (CDR) mediation, high-concurrency SIP trunk rating, and conversational AI payment reminder calls.",
    metrics: "Over 2M Calls/Day Rated",
    features: ["PBX Direct API Integration", "Real-Time Fraud Call Detection", "Automated Voice Payment Cadences"],
  },
  {
    id: "msp",
    title: "Managed IT & SD-WAN Providers",
    icon: Building2,
    desc: "Multi-tenant enterprise self-care portals, SLA uptime tracking, and multi-vendor firewall and perimeter security sync.",
    metrics: "Multi-Tenant Isolation",
    features: ["White-Label Enterprise Portal", "Automated VIP SLA Credit Rating", "FortiGate / Cisco SD-WAN Sync"],
  },
];

export const Industries: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-art section-art-minimal section-art-shapes w-full py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E8DFF0] text-[#1B1024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
            Tailored Telecom Architecture
          </span>
          <h2 className="section-heading text-[#2B0D3A]">
            Built for every telecom provider type.
          </h2>
          <p className="text-sm md:text-base text-[#6F6078]">
            Whether you operate 15,000 wireless subscribers across rural sectors or 500,000+ GPON fiber circuits in metropolitan rings, Kashtrix scales to your infrastructure.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind, index) => {
            const Icon = ind.icon;
            const isHovered = hoveredId === ind.id;

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(ind.id)}
                onMouseLeave={() => setHoveredId(null)}
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
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F8F7FA] text-[#2B0D3A] border border-[#E8DFF0]">
                      {ind.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-sora text-[#2B0D3A]">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#6F6078] leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-[#E8DFF0]/60">
                    <span className="text-[10px] font-bold uppercase text-[#4A1B7A] tracking-wider block">
                      Core Capabilities:
                    </span>
                    {ind.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#1B1024]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D72]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFF0]">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4A1B7A] group hover:text-[#2B0D3A]"
                  >
                    <span>Explore Solution</span>
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
