import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { AIAgents } from "@/components/sections/AIAgents";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix AI Agents | Autonomous Employees for Telecom Departments",
  description: "Deploy autonomous digital employees across NOC, billing, sales, and support to resolve 72% of network tickets instantly without human dispatch.",
  canonical: "https://kashtrix.com/ai-agents",
});

export default function AIAgentsPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.aiAgents}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#FCE7F3]/40 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-pink)] text-[var(--text-accent)] mb-4">
            AI-Native Workforce
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            AI Employees for Every Telecom Department
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Domain-expert AI models trained on telecom RFC standards, multi-vendor CLI syntaxes, and optical attenuation formulas.
          </p>
        </div>
      </div>
      <AIAgents />
      </MarketingDetailPage>
    </SiteShell>
  );
}
