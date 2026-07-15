import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PricingSection } from "@/components/sections/PricingSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix BSS | Real-Time Rating, Billing & Revenue Assurance",
  description: "Next-gen telecom Business Support System (BSS) featuring zero-leakage prepaid/postpaid rating, automated dunning, and package builder.",
  canonical: "https://kashtrix.com/bss",
});

export default function BSSPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/50 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Business Support System
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            Zero-Leakage Telecom BSS &amp; Financial Engine
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Unify real-time circuit rating, automated invoice reconciliation, and payment gateways into a single business engine that speeds up cash collection by over 45%.
          </p>
        </div>
      </div>
      <PricingSection />
    </SiteShell>
  );
}
