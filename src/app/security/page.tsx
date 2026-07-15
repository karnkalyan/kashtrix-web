import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Security | SOC 2 Type II & Zero-Trust Telecom Vault",
  description: "Learn how Kashtrix secures multi-vendor network operations with mutual TLS, HMAC webhook signing, and immutable PostgreSQL SOC 2 compliance logs.",
  canonical: "https://kashtrix.com/security",
});

export default function SecurityPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.security}>
      <div hidden className="pt-16 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            SOC 2 Type II Certified
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Security Engineered Into Every Packet
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Protecting national telecom infrastructure requires zero-trust isolation. Explore our role-based access controls, cryptographic token vaults, and immutable audit logs.
          </p>
        </div>
      </div>
      <SecuritySection />
      </MarketingDetailPage>
    </SiteShell>
  );
}
