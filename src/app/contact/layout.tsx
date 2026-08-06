import type { ReactNode } from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Kashtrix Sales & Support | Telecom OSS/BSS & Syslog Experts",
  description:
    "Speak with Kashtrix telecom solutions architects about OSS/BSS deployment, Carrier-Grade Syslog servers, AI Agents, MikroTik RADIUS billing, and custom integrations.",
  keywords: [
    "Contact Kashtrix",
    "Kashtrix sales",
    "telecom OSS BSS sales",
    "syslog server inquiry",
    "ISP software contact",
  ],
  canonical: "https://kashtrix.com/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
