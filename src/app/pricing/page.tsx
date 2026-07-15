import { SiteShell } from "@/components/layout/SiteShell";
import { PricingInquiry } from "@/components/sections/PricingInquiry";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Custom Telecom Platform Pricing | Kashtrix",
  description: "Request tailored Kashtrix pricing based on your subscribers, network estate, integrations and automation requirements. Speak with a telecom solutions architect.",
  canonical: "https://kashtrix.com/pricing",
});

export default function PricingPage() { return <SiteShell><PricingInquiry /></SiteShell>; }
