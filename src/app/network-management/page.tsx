import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Network Management | Sub-Second NOC Telemetry & AI Fault Isolation",
  description:
    "Real-time NOC network telemetry, AI fault isolation server, optical alarm correlation, and topology-aware outage mapping for ISPs and telecom operators.",
  keywords: [
    "NOC network management",
    "telecom network monitoring",
    "ai NOC telemetry",
    "AI fault isolation server",
    "optical alarm correlation",
    "ISP network management",
    "fiber GIS outage mapping",
    "Kashtrix Network Management",
  ],
  canonical: "https://kashtrix.com/network-management",
});

export default function NetworkManagementPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.networkManagement} />
    </SiteShell>
  );
}
