import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Terminal, Server, Shield, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Documentation | Telecom OSS/BSS, Syslog & AI Server Setup Guides",
  description:
    "Comprehensive technical documentation for installing and integrating Kashtrix Telecom Operating System, Carrier-Grade Syslog Server, FreeRADIUS AAA, and AI Agents.",
  keywords: [
    "telecom documentation",
    "Kashtrix documentation",
    "OSS BSS setup guide",
    "carrier grade syslog documentation",
    "FreeRADIUS integration guide",
    "AI NOC setup guide",
  ],
  canonical: "https://kashtrix.com/documentation",
});

export default function DocumentationPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-20 bg-[var(--surface-1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
              Technical Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
              Kashtrix Architecture &amp; Integration Guides
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              Explore step-by-step guides for connecting your fiber switches, configuring automated billing dunning loops, and launching autonomous AI employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--surface-2)] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[var(--text-primary)]">
                <Server className="w-5 h-5 text-[var(--text-link)]" /> 1. Core Platform Setup
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[var(--text-primary)]">
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Connecting Radius AAA &amp; PPPoE Pools</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Configuring GPON OLT SNMP &amp; gNMI Traps</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Multi-Tenant Database Schema Migration</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--surface-2)] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[var(--text-primary)]">
                <Terminal className="w-5 h-5 text-[var(--text-link)]" /> 2. Automation &amp; AI
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[var(--text-primary)]">
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Building Multi-Vendor CLI Script Macros</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Pre-Commit Regex &amp; Auto-Rollback Loops</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Fine-Tuning Autonomous NOC &amp; Support AI</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--surface-2)] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-sora text-[var(--text-primary)]">
                <Shield className="w-5 h-5 text-[var(--text-link)]" /> 3. Security &amp; APIs
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-[var(--text-primary)]">
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Zero-Trust HMAC Webhook Signing</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> SOC 2 Type II Immutable Audit Ledger</li>
                <li className="flex items-center gap-2 hover:text-[var(--text-link)]"><ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" /> Role-Based Access Control (RBAC) Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
