import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Network Automation Tools | MikroTik, Cisco, Nokia & Juniper BNG Orchestration",
  description:
    "Automate Broadband Network Gateways (BNG/vBNG), MikroTik RouterOS, Cisco ASR, Nokia BNG, Juniper MX, dynamic IP pool allocation, ISP subscriber order activation, and RADIUS Change of Authorization (CoA).",
  keywords: [
    "MikroTik network automation tool",
    "Cisco vBNG subscriber provisioning",
    "Nokia BNG automation tool",
    "Juniper MX network automation tool",
    "ISP order activation software",
    "subscriber order management automation",
    "RADIUS CoA automation tool",
    "PPPoE dynamic IP pool management",
    "Kashtrix Network Automation",
  ],
  canonical: "https://kashtrix.com/network-automation",
});

export default function NetworkAutomationPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.networkAutomation} />
    </SiteShell>
  );
}
