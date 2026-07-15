import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { TelecomWorkflow } from "@/components/sections/TelecomWorkflow";
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
      <MarketingDetailPage config={DETAIL_CONFIGS.fieldOperations}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Field Service Management
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            GPS Field Operations &amp; Dispatching App
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Dispatch technicians automatically with exact GIS fiber splice enclosure coordinates. Technicians verify optical loss tests directly from the mobile app before closing work orders.
          </p>
        </div>
      </div>
      <TelecomWorkflow />
      </MarketingDetailPage>
    </SiteShell>
  );
}
