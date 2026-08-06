import type { ReactNode } from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Request a Kashtrix Live Demo | AI-Native Telecom OSS/BSS & Syslog",
  description:
    "Schedule a live platform demonstration of Kashtrix OSS/BSS, Carrier-Grade Syslog Server, AI Agents, FreeRADIUS AAA, and MikroTik billing with a lead solutions engineer.",
  keywords: [
    "Kashtrix demo",
    "ISP billing software demo",
    "telecom OSS BSS demo",
    "carrier grade syslog demo",
    "AI NOC demo",
  ],
  canonical: "https://kashtrix.com/request-demo",
});

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
