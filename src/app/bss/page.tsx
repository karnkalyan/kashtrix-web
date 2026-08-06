import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata, getOSSBSSProductSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix BSS | Telecom Business Support System & ISP Revenue Management",
  description:
    "Next-generation Telecom Business Support System (BSS) featuring real-time rating engine, convergent prepaid/postpaid billing, automated dunning, product catalog, and subscriber CRM.",
  keywords: [
    "bss",
    "oss bss",
    "telecom bss",
    "Kashtrix BSS",
    "business support system",
    "telecom business support system",
    "ISP billing software",
    "telecom revenue assurance",
    "prepaid postpaid billing rating engine",
    "telecom product catalog",
    "subscriber CRM",
  ],
  canonical: "https://kashtrix.com/bss",
});

export default function BSSPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOSSBSSProductSchema()) }}
      />
      <MarketingDetailPage config={DETAIL_CONFIGS.bss} />
    </SiteShell>
  );
}
