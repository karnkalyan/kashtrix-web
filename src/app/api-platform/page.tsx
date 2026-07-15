import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { APIAutomation } from "@/components/sections/APIAutomation";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix API Platform | REST, GraphQL & Webhooks OpenAPI Reference",
  description: "Explore the Kashtrix OpenAPI reference. Trigger multi-vendor BNG workflows, query active Radius sessions, and launch voice campaigns programmatically.",
  canonical: "https://kashtrix.com/api-platform",
});

export default function APIPlatformPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A] mb-4">
            Developer &amp; API Core
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            Enterprise API &amp; Orchestration Platform
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Every UI action in Kashtrix is built on top of our public API. Use our TypeScript, Python, and Go SDKs to build custom zero-touch automation scripts safely.
          </p>
        </div>
      </div>
      <APIAutomation />
    </SiteShell>
  );
}
