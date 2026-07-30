import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Billing | Prepaid, Postpaid & Automated Dunning Engine",
  description: "Real-time telecom rating, CDR mediation, and multi-currency billing collections. Eliminates revenue leakage and speeds up collections by over 45%.",
  canonical: "https://kashtrix.com/billing",
});

export default function BillingPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.billing} />
    </SiteShell>
  );
}
