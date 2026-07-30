import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
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
      <MarketingDetailPage config={DETAIL_CONFIGS.networkAutomation} />
    </SiteShell>
  );
}
