import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Network Management | Sub-Second NOC Telemetry & Alarms",
  description: "Real-time NOC network telemetry, optical alarm correlation, and autonomous fault self-healing for fiber and broadband operators.",
  canonical: "https://kashtrix.com/network-management",
});

export default function NetworkManagementPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.networkManagement} />
    </SiteShell>
  );
}
