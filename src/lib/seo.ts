import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const DEFAULT_KEYWORDS = [
  "Kashtrix OSS/BSS",
  "Kashtrix Syslog",
  "Telecom OSS BSS platform",
  "AI telecom platform",
  "ISP management software",
  "ISP billing software",
  "Carrier-grade ISP syslog collector",
  "CGNAT law enforcement audit log storage",
  "FreeRADIUS subscriber AAA billing",
  "MikroTik RADIUS software",
  "Cisco ASR vBNG provisioning",
  "GPON XGS-PON OLT management software",
  "TR-069 USP ACS auto-configuration server",
  "Network hardware automation",
  "Telecom CRM software",
  "AI NOC fault isolation",
  "Multi-tenant ISP management software",
  "Broadband subscriber activation platform",
  "Geospatial fiber GIS outage mapping",
  "Automated dunning and payment gateway reconciliation",
  "Field operations dispatch & technician app",
  "Open REST API telecom integration framework",
  "Carrier-grade syslog collector",
  "CGNAT compliance archiving",
];

export function constructMetadata({
  title = "Kashtrix | AI-Native OSS/BSS & Syslog Platform for Telecom",
  description = "Kashtrix OSS/BSS unifies NOC telemetry, billing, CRM, FreeRADIUS AAA, and AI agents. Kashtrix Syslog delivers carrier-grade log collection with CGNAT law compliance. Two products, one telecom operating system.",
  keywords = DEFAULT_KEYWORDS,
  ogImage = "/logo/logo.png",
  canonical,
}: MetadataProps = {}): Metadata {
  const canonicalUrl = canonical || "https://kashtrix.com";
  const metadata: Metadata = {
    metadataBase: new URL("https://kashtrix.com"),
    applicationName: "Kashtrix Telecom Operating System",
    creator: "Kashtrix Platform Inc.",
    publisher: "Kashtrix Platform Inc.",
    category: "Telecommunications Software & Network Automation",
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
      siteName: "Kashtrix Unified Telecom Platform",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Kashtrix AI-Native Telecom OSS/BSS & Network Automation Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@kashtrix",
      site: "@kashtrix",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
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
    legalName: "Kashtrix Platform Inc.",
    url: "https://kashtrix.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kashtrix.com/logo/logo.png",
      width: "512",
      height: "512",
    },
    description: "AI-Native Telecom OSS/BSS, Network Automation, ISP Billing, and Multi-Vendor Hardware Orchestration Platform.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "info@kashtrix.com",
        contactType: "customer service",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "sales@kashtrix.com",
        contactType: "sales",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://twitter.com/kashtrix",
      "https://linkedin.com/company/kashtrix",
      "https://github.com/kashtrix",
    ],
    location: [
      { "@type": "Place", name: "Dubai, United Arab Emirates" },
      { "@type": "Place", name: "Singapore" },
      { "@type": "Place", name: "Dallas, Texas, United States" },
      { "@type": "Place", name: "Kathmandu, Nepal" },
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kashtrix.com/#website",
    name: "Kashtrix Telecom Operating System",
    alternateName: ["Kashtrix OSS/BSS", "Kashtrix ISP Platform"],
    url: "https://kashtrix.com/",
    description: "AI-native OSS, BSS, ISP management, CGNAT syslog compliance, OLT automation, billing, CRM, and network orchestration.",
    inLanguage: "en-US",
    publisher: { "@id": "https://kashtrix.com/#organization" },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://kashtrix.com/#software",
    name: "Kashtrix Enterprise Telecom Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Telecommunications OSS/BSS & Network Automation",
    operatingSystem: "Cloud, Web-based, Linux Enterprise",
    url: "https://kashtrix.com/platform",
    description: "AI-native telecom OSS/BSS platform for ISP billing, subscriber CRM, FreeRADIUS AAA, CGNAT syslog archiving, GPON OLT provisioning, and autonomous AI NOC operations.",
    provider: { "@id": "https://kashtrix.com/#organization" },
    offers: {
      "@type": "Offer",
      price: "Custom",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
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
