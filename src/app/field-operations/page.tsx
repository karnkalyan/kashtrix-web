import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Field Operations | GPS Technician Dispatching & QR Scanner",
  description: "Optimize field technician routing with offline-ready mobile QR barcode CPE scanners, work order tracking, and automated SLA uptime credit calculations.",
  canonical: "https://kashtrix.com/field-operations",
});

export default function FieldOperationsPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.fieldOperations} />
    </SiteShell>
  );
}
