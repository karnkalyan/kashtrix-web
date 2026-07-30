import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix OSS | Radius AAA, PPPoE, BNG & GPON OLT Management",
  description: "High-speed telecom Operations Support System (OSS) with 50,000 req/s Radius authentication, TR-069 ACS, and fiber GIS topology mapping.",
  canonical: "https://kashtrix.com/oss",
});

export default function OSSPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.oss} />
    </SiteShell>
  );
}
