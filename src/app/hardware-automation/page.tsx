import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
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
      <MarketingDetailPage config={DETAIL_CONFIGS.hardwareAutomation} />
    </SiteShell>
  );
}
