import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeClient } from "./HomeClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix | No.1 AI-Native Telecom OSS/BSS, Syslog Server & AI Agent Platform",
  description:
    "Kashtrix is the premier AI-Native Telecom Operating System. Empowering ISPs and telecom carriers with Carrier-Grade Syslog CGNAT audit log storage, unified OSS/BSS, AI NOC Telemetry Server, AI Agents, MikroTik/FreeRADIUS billing, and end-to-end ISP business management.",
  keywords: [
    "Kashtrix",
    "Kashtrix OSS/BSS",
    "Kashtrix Syslog",
    "Kashtrix AI Server",
    "Kashtrix AI Agent",
    "syslog",
    "syslog server",
    "carrier-grade syslog",
    "CGNAT syslog server",
    "oss bss",
    "telecom oss bss",
    "ai server",
    "telecom ai server",
    "ai agent",
    "telecom ai agent",
    "isp business",
    "ISP management software",
    "ISP billing software",
    "wisp software",
    "FreeRADIUS AAA billing",
    "MikroTik RADIUS software",
    "GPON OLT management software",
    "TR-069 ACS server",
  ],
  canonical: "https://kashtrix.com/",
});

export default async function HomePage() {
  return (
    <SiteShell>
      <HomeClient />
    </SiteShell>
  );
}
