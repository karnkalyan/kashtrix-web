import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const DEFAULT_KEYWORDS = [
  "Telecom OSS BSS platform",
  "AI telecom platform",
  "ISP management software",
  "ISP billing software",
  "OSS BSS automation",
  "BNG automation",
  "Radius automation",
  "OLT ONT management",
  "TR-069 ACS",
  "Network hardware automation",
  "Telecom CRM",
  "AI NOC automation",
];

export function constructMetadata({
  title = "Kashtrix | OSS BSS, ISP Management & OLT Automation Platform",
  description = "Kashtrix is an AI-native OSS/BSS and ISP automation system for billing, CRM, Radius, subscriber management, GPON OLT provisioning, network operations and multi-vendor automation.",
  keywords = DEFAULT_KEYWORDS,
  ogImage = "/logo/logo.png",
  canonical,
}: MetadataProps = {}): Metadata {
  const canonicalUrl = canonical || "https://kashtrix.com";
  const metadata: Metadata = {
    metadataBase: new URL("https://kashtrix.com"),
    applicationName: "Kashtrix",
    creator: "Kashtrix",
    publisher: "Kashtrix",
    category: "Telecommunications Software",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: "Kashtrix Platform",
      images: [{ url: ogImage, alt: "Kashtrix AI-native telecom platform" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@kashtrix",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: { "en": canonicalUrl, "x-default": canonicalUrl },
    },
  };
  return metadata;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kashtrix.com/#organization",
    name: "Kashtrix",
    url: "https://kashtrix.com",
    logo: "https://kashtrix.com/logo/wide-logo.png",
    description: "AI-Native Telecom OSS/BSS, Network Automation, and Hardware Orchestration Platform.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@kashtrix.com",
      contactType: "customer service",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
    location: ["Dubai", "Singapore", "Dallas, United States", "Kathmandu, Nepal"],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kashtrix.com/#website",
    name: "Kashtrix",
    alternateName: "Kashtrix Telecom Platform",
    url: "https://kashtrix.com/",
    description: "AI-native OSS, BSS, ISP management, OLT automation, billing, CRM and network automation platform.",
    inLanguage: "en",
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://kashtrix.com/#software",
    name: "Kashtrix Enterprise Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Telecommunications OSS/BSS and network automation",
    operatingSystem: "Cloud, Web-based, Linux Enterprise",
    url: "https://kashtrix.com/platform",
    description: "AI-native telecom OSS/BSS platform for ISP billing, CRM, subscriber management, network automation and AI-assisted operations.",
    provider: { "@id": "https://kashtrix.com/#organization" },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
