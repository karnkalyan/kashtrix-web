import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";
import { ISPSyslogSection } from "@/components/sections/ISPSyslogSection";

export const metadata = constructMetadata({
  title: "Carrier-Grade ISP Syslog & CGNAT Audit Compliance | Kashtrix",
  description:
    "High-throughput syslog collector and CGNAT audit logging for ISPs. Ingest 100,000+ msgs/sec from MikroTik, Cisco, and OLTs with 100% legal compliance.",
  canonical: "https://kashtrix.com/syslog",
});

export default function SyslogPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.syslog}>
        <ISPSyslogSection />
      </MarketingDetailPage>
    </SiteShell>
  );
}
