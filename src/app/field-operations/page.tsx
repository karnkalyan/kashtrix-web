import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Field Operations | ISP Field Technician App & Dispatch Management",
  description:
    "Empower ISP field crews with GPS route dispatching, offline mobile barcode/QR CPE scanning, fiber installation tracking, and AI-assisted dispatch scheduling.",
  keywords: [
    "ISP field operations app",
    "telecom technician dispatch software",
    "fiber installation tracking",
    "CPE QR barcode scanning",
    "ISP work order dispatch software",
    "Kashtrix Field Operations",
  ],
  canonical: "https://kashtrix.com/field-operations",
});

export default function FieldOperationsPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.fieldOperations} />
    </SiteShell>
  );
}
