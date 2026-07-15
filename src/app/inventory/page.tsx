import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HardwareAutomation } from "@/components/sections/HardwareAutomation";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Inventory | CPE Lifecycle, Barcode Tracking & Optical Serials",
  description: "Track customer premise equipment (CPE), optical transceivers, and warehouse inventory with automated serial reconciliation and warranty lifecycle management.",
  canonical: "https://kashtrix.com/inventory",
});

export default function InventoryPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Hardware Lifecycle Management
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            CPE Serial Tracking &amp; Warehouse Inventory
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Eliminate lost optical transceivers and unreturned subscriber modems. Synchronize warehouse serial numbers directly with OLT provisioned MAC addresses.
          </p>
        </div>
      </div>
      <HardwareAutomation />
    </SiteShell>
  );
}
