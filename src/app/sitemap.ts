import type { MetadataRoute } from "next";

const routes = [
  "",
  "about",
  "ai-agents",
  "api-platform",
  "billing",
  "bss",
  "contact",
  "crm",
  "documentation",
  "field-operations",
  "hardware-automation",
  "industries",
  "integrations",
  "inventory",
  "login",
  "network-automation",
  "network-management",
  "oss",
  "platform",
  "pricing",
  "privacy",
  "request-demo",
  "resources",
  "security",
  "syslog",
  "terms",
  "voice-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kashtrix.com").replace(/\/$/, "");

  return routes.map((route) => {
    const isHome = route === "";
    const isHighPriority = ["platform", "pricing", "syslog", "oss", "bss", "crm", "billing", "ai-agents", "request-demo"].includes(route);

    return {
      url: isHome ? `${baseUrl}/` : `${baseUrl}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: isHome ? "daily" : isHighPriority ? "weekly" : "monthly",
      priority: isHome ? 1.0 : isHighPriority ? 0.9 : 0.7,
    };
  });
}
