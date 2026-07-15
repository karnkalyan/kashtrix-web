import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { VoiceAutomation } from "@/components/sections/VoiceAutomation";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kashtrix Voice AI | Conversational Telecom Call & IVR Automation",
  description: "Connect Kashtrix Voice AI directly to Asterisk, Yeastar, or carrier SIP trunks. Conduct thousands of natural customer payment and support interactions simultaneously.",
  canonical: "https://kashtrix.com/voice-automation",
});

export default function VoiceAutomationPage() {
  return (
    <SiteShell>
      <div className="pt-12 pb-8 bg-gradient-to-b from-[#FCE7F3]/40 to-[#FFFFFF] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCE7F3] text-[#E11D72] mb-4">
            Conversational Voice AI
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
            AI-Powered Voice Automation for Telecom
          </h1>
          <p className="text-sm sm:text-base text-[#6F6078] mt-4 leading-relaxed">
            Human-like technical speech-to-text with 99.4% intent extraction. Automate payment reminder cadences and triage optical router support issues over SIP phone calls.
          </p>
        </div>
      </div>
      <VoiceAutomation />
    </SiteShell>
  );
}
