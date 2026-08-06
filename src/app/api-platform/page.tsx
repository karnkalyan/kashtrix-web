import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix API Platform | Open REST API, Webhooks & OpenAPI Telecom Framework",
  description:
    "Open REST API and Webhook integration framework for telecom operators. Connect ERPs, payment gateways, MikroTik routers, FreeRADIUS AAA, and custom apps seamlessly.",
  keywords: [
    "Open REST API telecom",
    "telecom API integration framework",
    "OpenAPI OSS BSS",
    "telecom webhook platform",
    "FreeRADIUS API integration",
    "Kashtrix API Platform",
  ],
  canonical: "https://kashtrix.com/api-platform",
});

export default function APIPlatformPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.apiPlatform} />
    </SiteShell>
  );
}
