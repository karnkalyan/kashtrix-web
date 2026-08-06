import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const DEFAULT_KEYWORDS = [
  "Kashtrix",
  "Kashtrix OSS/BSS",
  "Kashtrix Syslog",
  "Kashtrix AI Server",
  "Kashtrix AI Agent",
  "syslog",
  "syslog server",
  "carrier-grade syslog collector",
  "CGNAT syslog server",
  "CGNAT compliance audit log storage",
  "events per second EPS log ingestion",
  "subscriber IP port mapping audit storage",
  "deterministic NAT session logging",
  "hot cold log tiering S3 archiving",
  "DoT TRAI compliance syslog server",
  "tamper proof log compliance vault",
  "law enforcement subpoena audit log search",
  "ISP syslog management",
  "MikroTik syslog server",
  "Cisco syslog collector",
  "oss bss",
  "telecom oss bss",
  "cloud native oss bss platform",
  "ISP OSS BSS",
  "operations support system",
  "business support system",
  "telecom OSS",
  "telecom BSS",
  "ai server",
  "telecom ai server",
  "AI NOC server",
  "AI network telemetry server",
  "ai agent",
  "telecom ai agent",
  "ISP AI agent",
  "autonomous AI NOC agent",
  "predictive fault detection AI server",
  "closed-loop self-healing network workflow",
  "mean time to repair MTTR reduction AI",
  "agentic AI telecom operations",
  "NOC alert noise correlation AI",
  "AI digital employees",
  "isp business",
  "ISP management software",
  "ISP billing software",
  "wisp management software",
  "broadband subscriber billing",
  "ISP order management software",
  "telecom order management system",
  "subscriber order lifecycle platform",
  "CDR mediation rating engine",
  "FreeRADIUS subscriber AAA billing",
  "MikroTik RADIUS software",
  "MikroTik NAS RouterOS API integration",
  "MikroTik RouterOS automation tool",
  "MikroTik API provisioning software",
  "Cisco ASR vBNG subscriber provisioning",
  "Cisco IOS-XR automation tool",
  "Nokia ISAM GPON OLT automation tool",
  "Nokia FX OLT management software",
  "Huawei MA5800 OLT automation tool",
  "Huawei SmartAX OLT software",
  "ZTE C300 C600 OLT automation tool",
  "Juniper MX BNG automation tool",
  "FiberHome GPON OLT management",
  "GPON XGS-PON OLT management software",
  "TR-069 USP ACS auto-configuration server",
  "Network hardware automation tools",
  "Multi-vendor network automation software",
  "Telecom CRM software",
  "AI NOC fault isolation",
  "Multi-tenant ISP management software",
  "Broadband subscriber activation platform",
  "Geospatial fiber GIS outage mapping",
  "Automated dunning and payment gateway reconciliation",
  "Field operations dispatch technician app",
  "Open REST API telecom integration framework",
  "Carrier-grade syslog collector",
  "CGNAT compliance archiving",
];

export function constructMetadata({
  title = "Kashtrix | No.1 AI-Native Telecom OSS/BSS, Syslog Server & Device Automation Tools",
  description = "Kashtrix is the premier AI-Native Telecom Operating System. Empowering ISPs with MikroTik, Nokia, Cisco, Huawei, and ZTE device automation tools, carrier-grade syslog CGNAT archiving, ISP order management, FreeRADIUS AAA, and AI agents.",
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
    category: "Telecommunications Software, Device Automation Tools, AI Server & OSS/BSS",
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
          alt: "Kashtrix AI-Native Telecom OSS/BSS, Device Automation & Syslog Platform",
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
    description: "AI-Native Telecom OSS/BSS, Device Automation Tools (MikroTik, Cisco, Nokia, Huawei, ZTE), Carrier Syslog, ISP Order Management, and AI Agents.",
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
    alternateName: ["Kashtrix OSS/BSS", "Kashtrix Device Automation", "Kashtrix Syslog Server", "Kashtrix AI Server"],
    url: "https://kashtrix.com/",
    description: "AI-native OSS, BSS, ISP order management, device automation tools (MikroTik, Nokia, Cisco, Huawei, ZTE), CGNAT syslog compliance, and AI agent automation.",
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
    applicationSubCategory: "Telecommunications OSS/BSS, Device Automation Tools & Syslog Server",
    operatingSystem: "Cloud, Web-based, Linux Enterprise",
    url: "https://kashtrix.com/platform",
    description: "AI-native telecom OSS/BSS platform for ISP order management, subscriber CRM, MikroTik, Cisco, Nokia, Huawei, ZTE device automation tools, FreeRADIUS AAA, CGNAT syslog archiving, and AI agent dispatch.",
    provider: { "@id": "https://kashtrix.com/#organization" },
    offers: {
      "@type": "Offer",
      price: "Custom",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getSyslogProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/syslog#product",
    name: "Kashtrix Carrier-Grade ISP Syslog Server",
    image: "https://kashtrix.com/logo/logo.png",
    description: "High-throughput carrier-grade syslog collector and CGNAT audit logging server for ISPs. Ingest 100,000+ msgs/sec from MikroTik, Cisco, Nokia, Huawei, and GPON OLTs with 100% legal compliance.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    offers: {
      "@type": "Offer",
      url: "https://kashtrix.com/syslog",
      priceCurrency: "USD",
      price: "Custom",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getOSSBSSProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/oss#product",
    name: "Kashtrix Telecom OSS/BSS & ISP Order Management Platform",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Unified AI-native telecom OSS BSS platform featuring ISP order management, 50,000 req/s RADIUS AAA, GPON OLT provisioning, TR-069 ACS, convergent billing, and subscriber CRM.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    offers: {
      "@type": "Offer",
      url: "https://kashtrix.com/oss",
      priceCurrency: "USD",
      price: "Custom",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getDeviceAutomationProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/hardware-automation#product",
    name: "Kashtrix Multi-Vendor Device Automation Tools",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Multi-vendor network device automation tools for MikroTik RouterOS, Nokia ISAM OLTs, Cisco ASR BNGs, Huawei MA5800, ZTE C300, and Juniper MX routers via NETCONF, gNMI, and RESTCONF.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    offers: {
      "@type": "Offer",
      url: "https://kashtrix.com/hardware-automation",
      priceCurrency: "USD",
      price: "Custom",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getAIServerProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://kashtrix.com/ai-agents#product",
    name: "Kashtrix AI Telecom Server & AI Autonomous Agents",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Autonomous AI Telecom Server and AI Agents for NOC fault isolation, intelligent customer care, automated dunning, and proactive fiber incident dispatch for ISPs.",
    brand: { "@type": "Brand", name: "Kashtrix" },
    offers: {
      "@type": "Offer",
      url: "https://kashtrix.com/ai-agents",
      priceCurrency: "USD",
      price: "Custom",
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
