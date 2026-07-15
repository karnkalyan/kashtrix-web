import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { NetworkAutomation } from "@/components/sections/NetworkAutomation";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Network Automation | BNG, Radius, PPPoE & QoS Orchestration",
  description: "Orchestrate Broadband Network Gateways (BNGs), dynamic IP pools, and Change of Authorization (CoA) workflows with pre-commit validation regex and automatic rollback.",
  canonical: "https://kashtrix.com/network-automation",
});

export default function NetworkAutomationPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.networkAutomation}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Zero-Touch Core
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Broadband &amp; Network Automation Engine
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Automate subscriber provisioning, session load balancing, and bandwidth shaping with visual drag-and-drop actions and microsecond verification loops.
          </p>
        </div>
      </div>
      <NetworkAutomation />
      </MarketingDetailPage>
    </SiteShell>
  );
}
