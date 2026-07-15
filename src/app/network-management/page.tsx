import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { DashboardMockup } from "@/components/visual/DashboardMockup";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Network Management | Sub-Second NOC Telemetry & Alarms",
  description: "Real-time NOC network telemetry, optical alarm correlation, and autonomous fault self-healing for fiber and broadband operators.",
  canonical: "https://kashtrix.com/network-management",
});

export default function NetworkManagementPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.networkManagement}>
      <div hidden className="pt-12 pb-16 bg-gradient-to-b from-[#F4EEFF]/60 via-[#FFFFFF] to-[#F8F7FA] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
              NOC Telemetry Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
              Real-Time Network Operations &amp; Telemetry
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              Correlate thousands of optical and gateway alarms into single root-cause incidents. Monitor active throughput across peerings with sub-second polling.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </div>
      <ProductArchitecture />
      </MarketingDetailPage>
    </SiteShell>
  );
}
