import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix CRM | Telecom CRM Software & Broadband Subscriber 360",
  description:
    "Unified Telecom CRM & Broadband Subscriber Management platform. Manage subscriber identity, KYC, lead pipelines, ticketing, RADIUS sessions, and customer self-care portals with 360° visibility.",
  keywords: [
    "Telecom CRM software",
    "ISP CRM",
    "broadband subscriber CRM",
    "subscriber management software",
    "ISP customer care portal",
    "wisp crm",
    "telecom ticketing system",
    "Kashtrix CRM",
    "bss crm",
  ],
  canonical: "https://kashtrix.com/crm",
});

export default function CRMPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.crm} />
    </SiteShell>
  );
}
