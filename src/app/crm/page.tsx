import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix CRM | 360° Subscriber Management & Self-Care Portal",
  description: "Unified telecom Customer Relationship Management (CRM) tracking contracts, KYC, tickets, Radius sessions, and white-label subscriber self-service portal.",
  canonical: "https://kashtrix.com/crm",
});

export default function CRMPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.crm} />
    </SiteShell>
  );
}
