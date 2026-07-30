import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
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
      <MarketingDetailPage config={DETAIL_CONFIGS.aiAgents} />
    </SiteShell>
  );
}
