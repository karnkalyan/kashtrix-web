import type { ReactNode } from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Kashtrix | Telecom OSS/BSS Solutions Architects",
  description: "Contact Kashtrix telecom specialists about OSS/BSS modernization, ISP billing, network automation, AI agents and platform integrations.",
  canonical: "https://kashtrix.com/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
