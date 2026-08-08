import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ISPToolsHub } from "@/components/tools/ISPToolsHub";
import { TellUsWhatYouNeed } from "@/components/sections/TellUsWhatYouNeed";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Free ISP Tools — WISP & Fiber Engineering Calculators | Kashtrix",
  description:
    "17 Precision engineering tools for WISPs and fiber operators — FSPL Link Budget, GPON Splitter Loss, UPS Runtime, IPv4 Subnet, CGNAT, Tower Revenue, and dBm Converters. No sign-up required.",
  keywords: [
    "Free ISP Tools",
    "WISP calculators",
    "GPON splitter calculator",
    "Link budget calculator",
    "UPS runtime calculator",
    "IPv4 subnet calculator",
    "CGNAT calculator",
    "Tower revenue calculator",
    "SLA uptime calculator",
    "MAC lookup",
    "Kashtrix Tools",
  ],
  canonical: "https://kashtrix.com/tools",
});

export default function ToolsPage() {
  return (
    <SiteShell>
      <ISPToolsHub />
      <TellUsWhatYouNeed />
    </SiteShell>
  );
}
