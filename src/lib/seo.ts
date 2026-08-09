import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export const DEFAULT_KEYWORDS = [
  "Kashtrix",
  "ISP management software",
  "ISP management platform",
  "telecom OSS BSS",
  "ISP OSS BSS",
  "AI OSS BSS",
  "ISP billing software",
  "FreeRADIUS AAA",
  "broadband management software",
  "WISP management software",
  "FTTH management software",
  "MikroTik ISP management",
  "ISP CRM",
  "subscriber management",
  "ISP network management",
  "network automation",
  "OLT management software",
  "syslog server",
  "CGNAT logging",
  "AI agents for telecom",
  "telecom AI platform",
  "ISP syslog server",
  "RADIUS billing software",
  "TR-069 ACS",
  "BNG automation",
];

export function constructMetadata({
  title = "Kashtrix | AI-Native Telecom OSS/BSS & ISP Software",
  description = "Kashtrix is an AI-native OSS/BSS platform for ISPs, WISPs and FTTH operators, unifying network management, billing, CRM, Syslog, RADIUS, Fiber GIS and AI agents.",
  keywords = DEFAULT_KEYWORDS,
  ogImage = "https://kashtrix.com/logo/logo.png",
  canonical = "https://kashtrix.com/",
  noindex = false,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL("https://kashtrix.com/"),
    alternates: {
      canonical,
    },
    authors: [{ name: "Kashtrix Platform Inc." }],
    creator: "Kashtrix Platform Inc.",
    publisher: "Kashtrix Platform Inc.",
    icons: {
      icon: [
        { url: "/logo/logo.png", type: "image/png" },
        { url: "/favicon.ico" },
      ],
      apple: [
        { url: "/logo/logo.png" },
      ],
      shortcut: ["/logo/logo.png"],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Kashtrix — AI-Powered ISP Management & OSS/BSS Platform",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Kashtrix AI-powered ISP management software and telecom OSS/BSS platform",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@kashtrix",
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
  };
}

// ─── Structured Data Helpers ─────────────────────────────────────

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kashtrix.com/#organization",
    name: "Kashtrix Platform Inc.",
    url: "https://kashtrix.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://kashtrix.com/logo/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://kashtrix.com/logo/logo.png",
    description: "Kashtrix is an AI-powered ISP management and unified telecom OSS/BSS platform. It combines billing, CRM, FreeRADIUS AAA, network operations, OLT and BNG automation, carrier-grade syslog CGNAT compliance, and AI agents for ISPs, WISPs and FTTH operators.",
    sameAs: [
      "https://facebook.com/kashtrix",
      "https://github.com/kashtrix",
      "https://linkedin.com/company/kashtrix",
      "https://twitter.com/kashtrix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@kashtrix.com",
      availableLanguage: ["English"],
    },
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
    name: "Kashtrix — AI-Powered ISP Management & OSS/BSS Platform",
    alternateName: ["Kashtrix ISP Management Software", "Kashtrix OSS/BSS", "Kashtrix Syslog Server", "Kashtrix AI Agents"],
    url: "https://kashtrix.com/",
    description: "AI-powered ISP management software and unified telecom OSS/BSS platform for billing, CRM, FreeRADIUS AAA, network automation, GPON OLT management, syslog CGNAT compliance and AI agents.",
    inLanguage: "en-US",
    publisher: { "@id": "https://kashtrix.com/#organization" },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://kashtrix.com/#software",
    name: "Kashtrix ISP Management & Telecom OSS/BSS Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "ISP Management Software, Telecommunications OSS/BSS & Syslog Server",
    operatingSystem: "Cloud, Web-based, Linux Enterprise",
    url: "https://kashtrix.com/platform",
    description: "AI-powered ISP management software and telecom OSS/BSS platform for subscriber billing, CRM, FreeRADIUS AAA, MikroTik and multi-vendor network automation, GPON OLT provisioning, TR-069 ACS, carrier-grade syslog CGNAT archiving, and AI agents for ISPs, WISPs and FTTH operators.",
    provider: { "@id": "https://kashtrix.com/#organization" },
  };
}

// ─── BreadcrumbList Schema ────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = "https://kashtrix.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };
}

// ─── Product Schemas (without fake pricing) ───────────────────────

export function getSyslogProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/syslog#product",
    name: "Kashtrix ISP Syslog Server & CGNAT Compliance Logging Platform",
    image: "https://kashtrix.com/logo/logo.png",
    description: "High-throughput ISP syslog server and CGNAT audit logging platform. Ingest syslog streams from MikroTik, Cisco, Nokia, Huawei and GPON OLTs with subscriber IP-port mapping, encrypted archiving and law enforcement compliance search.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    url: "https://kashtrix.com/syslog",
  };
}

export function getOSSBSSProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/oss#product",
    name: "Kashtrix Telecom OSS/BSS & ISP Management Platform",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Unified AI-powered telecom OSS/BSS and ISP management platform featuring subscriber billing, CRM, FreeRADIUS AAA, GPON OLT provisioning, TR-069 ACS, network automation, and multi-vendor device management for ISPs, WISPs and FTTH operators.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    url: "https://kashtrix.com/oss",
  };
}

export function getDeviceAutomationProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/hardware-automation#product",
    name: "Kashtrix Multi-Vendor OLT & BNG Device Automation for ISPs",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Multi-vendor ISP device automation platform for MikroTik RouterOS, Nokia ISAM OLTs, Cisco ASR BNGs, Huawei MA5800, ZTE C300 and Juniper MX routers. Automate subscriber provisioning, OLT configuration and CPE management via NETCONF, gNMI and RESTCONF.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    url: "https://kashtrix.com/hardware-automation",
  };
}

export function getAIServerProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/ai-agents#product",
    name: "Kashtrix AI Agents for Telecom OSS/BSS & Network Operations",
    image: "https://kashtrix.com/logo/logo.png",
    description: "AI agents for telecom OSS/BSS and ISP network operations. Detect network faults, correlate alarms, assist NOC engineers, automate billing workflows, accelerate customer support and orchestrate field operations with policy-governed AI automation.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    url: "https://kashtrix.com/ai-agents",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
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
