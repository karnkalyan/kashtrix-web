import type { ReactNode } from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Request a Kashtrix Demo | AI-Native Telecom OSS/BSS",
  description: "Book a tailored Kashtrix platform demonstration for ISP billing, CRM, subscriber management, network automation and telecom AI agents.",
  canonical: "https://kashtrix.com/request-demo",
});

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
