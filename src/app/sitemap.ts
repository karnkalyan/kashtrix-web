import type { MetadataRoute } from "next";

// Define route categories for precise SEO indexing priority and change frequencies
const FLAGSHIP_PRODUCT_ROUTES = [
  "syslog",
  "oss",
  "bss",
  "ai-agents",
  "platform",
  "billing",
  "crm",
];

const SOLUTION_FEATURE_ROUTES = [
  "network-management",
  "network-automation",
  "hardware-automation",
  "voice-automation",
  "field-operations",
  "inventory",
  "api-platform",
  "industries",
  "integrations",
  "pricing",
  "request-demo",
];

const RESOURCE_CORPORATE_ROUTES = [
  "about",
  "contact",
  "documentation",
  "resources",
  "security",
];

const LEGAL_ROUTES = ["privacy", "terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kashtrix.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split("T")[0];

  // Home Page
  const homeEntry: MetadataRoute.Sitemap[number] = {
    url: `${baseUrl}/`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // Flagship Products (Syslog, OSS, BSS, AI Agents, Platform, Billing, CRM)
  const flagshipEntries: MetadataRoute.Sitemap = FLAGSHIP_PRODUCT_ROUTES.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.95,
  }));

  // Key Telecom Solutions & Feature Modules
  const solutionEntries: MetadataRoute.Sitemap = SOLUTION_FEATURE_ROUTES.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Corporate & Engineering Knowledge Resources
  const resourceEntries: MetadataRoute.Sitemap = RESOURCE_CORPORATE_ROUTES.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Legal & Compliance Pages
  const legalEntries: MetadataRoute.Sitemap = LEGAL_ROUTES.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [homeEntry, ...flagshipEntries, ...solutionEntries, ...resourceEntries, ...legalEntries];
}
