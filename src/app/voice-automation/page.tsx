import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { MarketingDetailPage } from "@/components/marketing/DetailPageSystem";
import { DETAIL_CONFIGS } from "@/lib/detailConfigs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Voice AI | Conversational Telecom Call & IVR Automation",
  description: "Connect Kashtrix Voice AI directly to Asterisk, Yeastar, or carrier SIP trunks. Conduct thousands of natural customer payment and support interactions simultaneously.",
  canonical: "https://kashtrix.com/voice-automation",
});

export default function VoiceAutomationPage() {
  return (
    <SiteShell>
      <MarketingDetailPage config={DETAIL_CONFIGS.voiceAutomation} />
    </SiteShell>
  );
}
