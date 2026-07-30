import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix API Platform | REST, GraphQL & Webhooks OpenAPI Reference",
  description: "Explore the Kashtrix OpenAPI reference. Trigger multi-vendor BNG workflows, query active Radius sessions, and launch voice campaigns programmatically.",
  canonical: "https://kashtrix.com/api-platform",
});

export default function APIPlatformPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.apiPlatform} />
    </SiteShell>
  );
}
