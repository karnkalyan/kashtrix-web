import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Billing | ISP Billing Software, FreeRADIUS AAA & Dunning Engine",
  description:
    "No. 1 ISP billing software & telecom revenue assurance engine. Real-time broadband subscriber rating, CDR mediation, automated dunning, payment gateway integration, and MikroTik RADIUS billing.",
  keywords: [
    "ISP billing software",
    "telecom billing software",
    "broadband subscriber billing",
    "FreeRADIUS AAA billing",
    "MikroTik ISP billing",
    "wisp billing software",
    "automated dunning engine",
    "payment gateway reconciliation ISP",
    "Kashtrix Billing",
    "bss billing",
  ],
  canonical: "https://kashtrix.com/billing",
});

export default function BillingPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.billing} />
    </SiteShell>
  );
}
