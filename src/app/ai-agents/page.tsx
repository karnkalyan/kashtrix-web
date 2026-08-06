import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata, getAIServerProductSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix AI Agents & AI Telecom Server | Autonomous NOC & Self-Healing AI",
  description:
    "Deploy autonomous AI NOC agents & AI Telecom Servers. Automate predictive fault detection, closed-loop self-healing remediation, 50%+ MTTR reduction, alert noise correlation, and customer care for ISPs.",
  keywords: [
    "ai agent",
    "telecom ai agent",
    "ai server",
    "telecom ai server",
    "Kashtrix AI Agent",
    "Kashtrix AI Server",
    "autonomous NOC agent",
    "predictive fault detection AI server",
    "closed-loop self-healing network workflow",
    "mean time to repair MTTR reduction AI",
    "NOC alert noise correlation AI",
    "ISP AI agent",
    "AI fault isolation server",
  ],
  canonical: "https://kashtrix.com/ai-agents",
});

export default function AIAgentsPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAIServerProductSchema()) }}
      />
      <MarketingDetailPage config={DETAIL_CONFIGS.aiAgents} />
    </SiteShell>
  );
}
