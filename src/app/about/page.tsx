import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { GlobalReady } from "@/components/sections/GlobalReady";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Kashtrix | Where Networks, Business & AI Work Together",
  description: "Kashtrix was founded by veteran telecom network architects to replace disconnected legacy billing, rating, and provisioning tools with one intelligent AI platform.",
  canonical: "https://kashtrix.com/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pt-16 pb-12 bg-gradient-to-b from-[#F4EEFF]/60 to-[#FFFFFF] border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
            Our Mission &amp; Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[var(--text-primary)] tracking-tight">
            Replacing Disconnected Systems With One Intelligent Core
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
            Founded in 2024 by veteran Tier-1 NOC architects and fiber engineers, Kashtrix was built to solve the fragmentation plague that slows down global telecommunications.
          </p>
        </div>
      </div>
      <TrustStrip />
      <GlobalReady />
    </SiteShell>
  );
}
