import type { MetadataRoute } from "next";

const routes = [
  "", "about", "ai-agents", "api-platform", "billing", "bss", "contact", "crm",
  "documentation", "field-operations", "hardware-automation", "industries", "integrations",
  "inventory", "network-automation", "network-management", "oss", "platform", "pricing",
  "privacy", "request-demo", "resources", "security", "terms", "voice-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kashtrix.com").replace(/\/$/, "");
  return routes.map((route) => ({
    url: route ? `${baseUrl}/${route}` : `${baseUrl}/`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["platform", "pricing", "contact", "request-demo"].includes(route) ? 0.9 : 0.7,
  }));
}
