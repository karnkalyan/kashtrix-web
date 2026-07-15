import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PricingSection } from "@/components/sections/PricingSection";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Billing | Prepaid, Postpaid & Automated Dunning Engine",
  description: "Real-time telecom rating, CDR mediation, and multi-currency billing collections. Eliminates revenue leakage and speeds up collections by over 45%.",
  canonical: "https://kashtrix.com/billing",
});

export default function BillingPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.billing}>
      <div hidden className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Zero-Leakage Financial Core
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Real-Time Rating &amp; Automated Billing Engine
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Link subscriber bandwidth usage directly to dynamic prepaid and postpaid rating meters. Automate multi-channel dunning workflows across SMS, email, and Voice AI.
          </p>
        </div>
      </div>
      <PricingSection />
      </MarketingDetailPage>
    </SiteShell>
  );
}
