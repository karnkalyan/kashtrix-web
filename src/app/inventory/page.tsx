import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Inventory | Telecom Asset & Serialized CPE Inventory Management",
  description:
    "Track serialized CPE routers, ONTs, optical transceivers, fiber spools, and warehouse stock across locations with automated warranty tracking and asset recovery.",
  keywords: [
    "telecom inventory software",
    "ISP CPE asset tracking",
    "serialized equipment tracking telecom",
    "optical transceiver inventory management",
    "Kashtrix Inventory",
  ],
  canonical: "https://kashtrix.com/inventory",
});

export default function InventoryPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.inventory} />
    </SiteShell>
  );
}
