import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { APIAutomation } from "@/components/sections/APIAutomation";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Integrations | Webhooks, PBX, GIS & Multi-Vendor Connectors",
  description: "Seamlessly integrate Kashtrix with existing billing gateways, corporate PBX dialplans, GIS mapping engines, and multi-vendor routers via secure webhooks.",
  canonical: "https://kashtrix.com/integrations",
});

export default function IntegrationsPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Ecosystem Connectivity
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            Integrate With Every System You Own
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Bidirectional JSON webhooks with cryptographic HMAC signing connect Kashtrix to your existing payment gateways, ERP ledgers, and optical infrastructure.
          </p>
        </div>
      </div>
      <APIAutomation />
    </SiteShell>
  );
}
