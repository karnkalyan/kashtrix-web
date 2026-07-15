import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { NetworkAutomation } from "@/components/sections/NetworkAutomation";
import { HardwareAutomation } from "@/components/sections/HardwareAutomation";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix OSS | Radius AAA, PPPoE, BNG & GPON OLT Management",
  description: "High-speed telecom Operations Support System (OSS) with 50,000 req/s Radius authentication, TR-069 ACS, and fiber GIS topology mapping.",
  canonical: "https://kashtrix.com/oss",
});

export default function OSSPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/50 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Operations Support System
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            Next-Gen Telecom OSS &amp; Network Provisioning
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Provision GPON terminals, manage dynamic IP pools, and execute high-concurrency Change of Authorization (CoA) workflows across multi-vendor gateways with zero manual CLI entry.
          </p>
        </div>
      </div>
      <NetworkAutomation />
      <HardwareAutomation />
    </SiteShell>
  );
}
