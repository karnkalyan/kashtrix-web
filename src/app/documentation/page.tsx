import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Terminal, Server, Shield, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Documentation | OSS, BSS & Network Integration Guides",
  description: "Comprehensive technical documentation covering unified OSS/BSS installation, multi-vendor NETCONF/gNMI driver configuration, and AI agent deployment.",
  canonical: "https://kashtrix.com/documentation",
});

export default function DocumentationPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
              Technical Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
              Kashtrix Architecture &amp; Integration Guides
            </h1>
            <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
              Explore step-by-step guides for connecting your fiber switches, configuring automated billing dunning loops, and launching autonomous AI employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-[#E8DFF0] bg-[#F8F7FA] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[#2B0D3A]">
                <Server className="w-5 h-5 text-[#4A1B7A]" /> 1. Core Platform Setup
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[#1B1024]">
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Connecting Radius AAA &amp; PPPoE Pools</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Configuring GPON OLT SNMP &amp; gNMI Traps</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Multi-Tenant Database Schema Migration</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-[#E8DFF0] bg-[#F8F7FA] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[#2B0D3A]">
                <Terminal className="w-5 h-5 text-[#4A1B7A]" /> 2. Automation &amp; AI
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[#1B1024]">
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Building Multi-Vendor CLI Script Macros</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Pre-Commit Regex &amp; Auto-Rollback Loops</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Fine-Tuning Autonomous NOC &amp; Support AI</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-[#E8DFF0] bg-[#F8F7FA] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[#2B0D3A]">
                <Shield className="w-5 h-5 text-[#4A1B7A]" /> 3. Security &amp; APIs
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[#1B1024]">
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Zero-Trust HMAC Webhook Signing</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> SOC 2 Type II Immutable Audit Ledger</li>
                <li className="flex items-center gap-2 hover:text-[#4A1B7A]"><ArrowRight className="w-3.5 h-3.5 text-[#E11D72]" /> Role-Based Access Control (RBAC) Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
