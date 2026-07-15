import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { BookOpen, Terminal, FileText, Video, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Resources | Technical Guides, Whitepapers & Release Notes",
  description: "Access technical documentation, multi-vendor BNG automation templates, AI agent fine-tuning guides, and weekly telecom architecture release notes.",
  canonical: "https://kashtrix.com/resources",
});

const RESOURCE_ITEMS = [
  {
    category: "Technical Whitepaper",
    title: "Sub-Second High-Concurrency Radius & BNG Re-balancing with AI",
    desc: "How Tier-1 ISPs eliminated prime-time streaming latency spikes by correlating optical alarms with dynamic PPPoE pool re-allocation.",
    date: "March 2026",
    href: "/documentation",
    icon: FileText,
  },
  {
    category: "Automation Template",
    title: "Zero-Touch GPON OLT Provisioning for Huawei MA5800 & Nokia ISAM",
    desc: "Ready-to-run NETCONF/YANG and CLI script templates verified across 15,000 active optical terminal deployments.",
    date: "February 2026",
    href: "/network-automation",
    icon: Terminal,
  },
  {
    category: "AI Agent Guide",
    title: "Fine-Tuning Autonomous Support AI for Optical Loss Deflection",
    desc: "A step-by-step architectural guide on configuring gNMI telemetry triggers to reboot CPE routers and resolve tier-1 tickets automatically.",
    date: "January 2026",
    href: "/ai-agents",
    icon: Sparkles,
  },
  {
    category: "On-Demand Webinar",
    title: "Replacing Disconnected Legacy Billing & Rating Engines with One Core",
    desc: "Technical deep dive with Senior NOC Architects on migrating 250,000 active subscriber circuits without service interruption.",
    date: "December 2025",
    href: "/billing",
    icon: Video,
  },
];

export default function ResourcesPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-16 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
              Knowledge &amp; Blueprint Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
              Resources, Templates &amp; Engineering Insights
            </h1>
            <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
              Explore production-verified multi-vendor automation scripts, AI reasoning architectures, and technical blueprints written by veteran NOC engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {RESOURCE_ITEMS.map((res) => {
              const Icon = res.icon;
              return (
                <Link
                  key={res.title}
                  href={res.href}
                  className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8DFF0] hover:border-[#4A1B7A] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[#F4EEFF] text-[#4A1B7A] group-hover:bg-[#2B0D3A] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-bold text-[#6F6078]">{res.date}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A1B7A] block">
                      {res.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold font-sora text-[#2B0D3A] group-hover:text-[#4A1B7A] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#6F6078] leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8DFF0] flex items-center gap-2 text-xs font-bold text-[#4A1B7A] group-hover:text-[#2B0D3A]">
                    <span>Read Technical Blueprint</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E11D72]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
