import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix BSS | Real-Time Rating, Billing & Revenue Assurance",
  description: "Next-gen telecom Business Support System (BSS) featuring zero-leakage prepaid/postpaid rating, automated dunning, and package builder.",
  canonical: "https://kashtrix.com/bss",
});

export default function BSSPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.bss} />
    </SiteShell>
  );
}
