import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { GlobalReady } from "@/components/sections/GlobalReady";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Platform | Unified OSS, BSS & AI Core Architecture",
  description: "Explore the unified Kashtrix platform architecture combining sub-second network telemetry, automated billing rating, and autonomous AI agents.",
  canonical: "https://kashtrix.com/platform",
});

export default function PlatformPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.platform}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/40 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Unified Operating System
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Every System. One Platform.
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Eliminate silos by connecting your fiber switches, BNG routers, billing meters, and support CRM into one synchronized timeseries database.
          </p>
        </div>
      </div>
      <PlatformOverview />
      <ProductArchitecture />
      <GlobalReady />
      </MarketingDetailPage>
    </SiteShell>
  );
}
