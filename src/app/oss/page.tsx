import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata, getOSSBSSProductSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix OSS | Telecom Operations Support System, Device Automation & Order Management",
  description:
    "Next-generation Telecom Operations Support System (OSS) featuring ISP order management, 50,000 req/sec FreeRADIUS AAA authentication, MikroTik, Nokia, Cisco, Huawei, ZTE device automation tools, TR-069 ACS, and GPON OLT provisioning.",
  keywords: [
    "oss",
    "oss bss",
    "telecom oss",
    "Kashtrix OSS",
    "ISP order management software",
    "telecom order management system",
    "operations support system",
    "device automation tools ISP",
    "MikroTik PPPoE server tool",
    "Nokia OLT provisioning software",
    "Cisco vBNG subscriber provisioning",
    "Huawei ZTE GPON OLT management",
    "TR-069 ACS server tool",
    "telecom NOC software",
  ],
  canonical: "https://kashtrix.com/oss",
});

export default function OSSPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOSSBSSProductSchema()) }}
      />
      <MarketingDetailPage config={DETAIL_CONFIGS.oss} />
    </SiteShell>
  );
}
