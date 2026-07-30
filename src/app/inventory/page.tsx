import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Inventory | CPE Lifecycle, Barcode Tracking & Optical Serials",
  description: "Track customer premise equipment (CPE), optical transceivers, and warehouse inventory with automated serial reconciliation and warranty lifecycle management.",
  canonical: "https://kashtrix.com/inventory",
});

export default function InventoryPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.inventory} />
    </SiteShell>
  );
}
