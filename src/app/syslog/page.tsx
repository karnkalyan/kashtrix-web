import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata, getSyslogProductSchema } from "@/lib/seo";
import { ISPSyslogSection } from "@/components/sections/ISPSyslogSection";
import { SyslogDeepDiveSection } from "@/components/sections/SyslogDeepDiveSection";

export const metadata = constructMetadata({
  title: "Carrier-Grade ISP Syslog Server & CGNAT Audit Logging Collector | Kashtrix Syslog",
  description:
    "No. 1 high-throughput syslog server & CGNAT audit collector for ISPs. 100,000+ EPS log ingestion, subscriber IP-port mapping, hot/cold S3 archiving, and subpoena audit search for MikroTik, Cisco, Nokia, and Huawei.",
  keywords: [
    "kashtrix oss bss syslog",
    "syslog",
    "syslog server",
    "syslog server free",
    "syslog server Windows",
    "syslog server open source",
    "syslog server Linux",
    "Kiwi Syslog Server alternative",
    "Kashtrix Syslog",
    "carrier-grade syslog collector",
    "CGNAT syslog server",
    "CGNAT audit logging ISP",
    "events per second EPS log ingestion",
    "subscriber IP port mapping audit storage",
    "deterministic NAT session logging",
    "law enforcement subpoena audit log search",
    "hot cold log tiering S3 archiving",
    "MikroTik syslog server",
    "Cisco syslog storage",
    "ISP syslog software",
  ],
  canonical: "https://kashtrix.com/syslog",
});

export default function SyslogPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSyslogProductSchema()) }}
      />
      <MarketingDetailPage config={DETAIL_CONFIGS.syslog}>
        <ISPSyslogSection />
        <SyslogDeepDiveSection />
      </MarketingDetailPage>
    </SiteShell>
  );
}
