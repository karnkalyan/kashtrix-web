import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HardwareAutomation } from "@/components/sections/HardwareAutomation";
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
      <MarketingDetailPage config={DETAIL_CONFIGS.inventory}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Hardware Lifecycle Management
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            CPE Serial Tracking &amp; Warehouse Inventory
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Eliminate lost optical transceivers and unreturned subscriber modems. Synchronize warehouse serial numbers directly with OLT provisioned MAC addresses.
          </p>
        </div>
      </div>
      <HardwareAutomation />
      </MarketingDetailPage>
    </SiteShell>
  );
}
