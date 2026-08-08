import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeClient } from "./HomeClient";
import { constructMetadata, getFAQSchema } from "@/lib/seo";
import { HOMEPAGE_FAQS } from "@/lib/faqs";

export const metadata = constructMetadata({
  title: "AI-Powered ISP Management Software & OSS/BSS Platform | Kashtrix",
  description:
    "Kashtrix is an AI-powered ISP management and OSS/BSS platform for ISPs, WISPs and fiber operators, combining billing, CRM, FreeRADIUS AAA, network operations, OLT and BNG automation, inventory, syslog and AI agents.",
  keywords: [
    "Kashtrix",
    "ISP management software",
    "ISP management platform",
    "AI-powered ISP management",
    "telecom OSS BSS",
    "ISP OSS BSS",
    "AI OSS BSS",
    "broadband management software",
    "ISP billing software",
    "FreeRADIUS AAA",
    "WISP management software",
    "FTTH management software",
    "MikroTik ISP management",
    "subscriber management",
    "ISP network management",
    "network automation",
    "AI agents for telecom",
    "syslog server",
    "CGNAT logging",
    "OLT management software",
  ],
  canonical: "https://kashtrix.com/",
});

export default async function HomePage() {
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <SiteShell>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <HomeClient />
    </SiteShell>
  );
}
