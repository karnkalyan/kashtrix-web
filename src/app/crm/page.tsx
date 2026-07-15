import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { TelecomWorkflow } from "@/components/sections/TelecomWorkflow";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix CRM | 360° Subscriber Management & Self-Care Portal",
  description: "Unified telecom Customer Relationship Management (CRM) tracking contracts, KYC, tickets, Radius sessions, and white-label subscriber self-service portal.",
  canonical: "https://kashtrix.com/crm",
});

export default function CRMPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Customer Experience Core
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            360° Telecom CRM &amp; Self-Care Portal
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Give support agents and subscribers a single unified view. Check active optical signal attenuation, billing balances, and open tickets from one synchronized interface.
          </p>
        </div>
      </div>
      <TelecomWorkflow />
    </SiteShell>
  );
}
