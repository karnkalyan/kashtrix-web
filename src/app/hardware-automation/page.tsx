import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HardwareAutomation } from "@/components/sections/HardwareAutomation";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Hardware Orchestration | Multi-Vendor Cisco, Huawei & Nokia Automation",
  description: "Orchestrate multi-vendor network infrastructure with native NETCONF, gNMI, RESTCONF, and SSH macro drivers. Includes pre-commit state verification and rollback loops.",
  canonical: "https://kashtrix.com/hardware-automation",
});

export default function HardwareAutomationPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.hardwareAutomation}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Multi-Vendor Matrix
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Multi-Vendor Hardware Orchestration
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Eliminate vendor lock-in with unified drivers for over 450 network operating systems. Execute atomic transaction configuration scripts with full state verification.
          </p>
        </div>
      </div>
      <HardwareAutomation />
      </MarketingDetailPage>
    </SiteShell>
  );
}
