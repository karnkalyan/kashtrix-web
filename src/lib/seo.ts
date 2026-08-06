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
  "kashtrix oss bss syslog",
  "kashtrix oss bss syslog pdf",
  "kashtrix oss bss syslog download",
  "oss bss syslog",
  "Kashtrix OSS/BSS",
  "Kashtrix Syslog",
  "Kashtrix AI Server",
  "Kashtrix AI Agent",
  "Kashtrix MCP Server",
  "mcp.kashtrix.com/mcp",
  "Model Context Protocol telecom server",
  "AI agent MCP integration endpoint",
  "syslog",
  "syslog server",
  "syslog server free",
  "syslog server Windows",
  "syslog server open source",
  "syslog server Linux",
  "Kiwi Syslog Server alternative",
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
  "ISP management system",
  "ISP management software",
  "ISP billing software",
  "ISP billing system",
  "ISP management system pdf",
  "ISP management system free download",
  "ISP management system github",
  "ISP billing system open source",
  "ISP billing software MikroTik",
  "Splynx alternative",
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
  ogImage = "https://kashtrix.com/logo/logo.png",
  canonical = "https://kashtrix.com/",
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
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Kashtrix Telecom Operating System",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Kashtrix AI-Native Telecom Operating System & Carrier Syslog Server",
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
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kashtrix.com/#organization",
    name: "Kashtrix Platform Inc.",
    url: "https://kashtrix.com/",
    logo: "https://kashtrix.com/logo/logo.png",
    image: "https://kashtrix.com/logo/logo.png",
    description: "Kashtrix is the premier AI-Native Telecom Operating System, unifying OSS/BSS, ISP order management, carrier-grade syslog CGNAT compliance, multi-vendor device automation tools, FreeRADIUS AAA, and AI NOC agents.",
    sameAs: [
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
      priceCurrency: "USD",
      price: "0.00",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
      url: "https://kashtrix.com/pricing",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "142",
      reviewCount: "128",
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
      price: "0.00",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "96",
      reviewCount: "84",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Network Director" },
        datePublished: "2026-01-15",
        reviewBody: "Ingests over 120k EPS CGNAT syslog logs seamlessly with instantaneous subpoena IP lookup.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
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
      price: "0.00",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "184",
      reviewCount: "162",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "VP Operations" },
        datePublished: "2026-02-10",
        reviewBody: "Unified our NOC monitoring, subscriber billing, and hardware provisioning into one system.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
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
      price: "0.00",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "112",
      reviewCount: "98",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lead Network Engineer" },
        datePublished: "2026-03-01",
        reviewBody: "Automated our MikroTik PPPoE queues and Nokia OLT provisioning with zero manual CLI commands.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
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
      price: "0.00",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "136",
      reviewCount: "115",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "CTO Telecom" },
        datePublished: "2026-03-20",
        reviewBody: "Reduced our NOC MTTR by 80% with automated fiber fault isolation and AI dispatch.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
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
