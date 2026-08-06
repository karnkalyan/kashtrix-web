import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata, getDeviceAutomationProductSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Device Automation Tools | MikroTik, Nokia, Cisco, Huawei & ZTE OLT Automation",
  description:
    "No. 1 multi-vendor device automation tools for ISPs. Automate MikroTik RouterOS, Nokia ISAM OLTs, Cisco ASR BNGs, Huawei MA5800, ZTE C300, and Juniper MX routers via NETCONF, gNMI, and RESTCONF.",
  keywords: [
    "MikroTik device automation tool",
    "Nokia OLT automation tool",
    "Cisco BNG automation software",
    "Huawei OLT automation tool",
    "ZTE GPON OLT software",
    "Juniper MX automation tool",
    "FiberHome OLT management software",
    "GPON XGS-PON OLT provisioning",
    "TR-069 USP ACS server tool",
    "multi vendor network device automation",
    "ISP device management tools",
    "Kashtrix Hardware Automation",
  ],
  canonical: "https://kashtrix.com/hardware-automation",
});

export default function HardwareAutomationPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getDeviceAutomationProductSchema()) }}
      />
      <MarketingDetailPage config={DETAIL_CONFIGS.hardwareAutomation} />
    </SiteShell>
  );
}
