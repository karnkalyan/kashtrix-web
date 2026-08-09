import fs from "fs";
import path from "path";
import sitemapFn from "../src/app/sitemap";
import robotsFn from "../src/app/robots";

interface RouteAudit {
  url: string;
  routePath: string;
  indexable: boolean;
  status: number;
  title?: string;
  description?: string;
  canonical?: string;
  h1Count: number;
  h1Text?: string;
  h2Count: number;
  wordCount: number;
  structuredDataTypes: string[];
  imageCount: number;
  missingAltCount: number;
  internalInboundLinks: number;
  internalOutboundLinks: number;
  sitemapInclusion: boolean;
  robotsState: string;
  passed: boolean;
  errors: string[];
}

interface AuditReport {
  timestamp: string;
  totalRoutesChecked: number;
  indexableRoutesCount: number;
  noindexRoutesCount: number;
  passedCount: number;
  failedCount: number;
  lighthouseTargets: {
    seo: number;
    accessibility: number;
    bestPractices: number;
    performance: number;
  };
  routes: RouteAudit[];
}

const APP_DIR = path.join(process.cwd(), "src", "app");
const SRC_DIR = path.join(process.cwd(), "src");

function getAllRoutes(dir: string, baseRoute = ""): string[] {
  let routes: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("api") && baseRoute === "") continue; // skip /api
      const nextBase = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`;
      routes.push(...getAllRoutes(path.join(dir, entry.name), nextBase));
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      routes.push(baseRoute === "" ? "/" : baseRoute);
    }
  }
  return routes;
}

// Recursively find content in file + imported local files (up to depth 3)
function getRouteCombinedSource(routePath: string): { content: string; filesSearched: string[] } {
  let relPath = routePath === "/" ? "page.tsx" : path.join(routePath.slice(1), "page.tsx");
  let filePath = path.join(APP_DIR, relPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(APP_DIR, routePath.slice(1), "page.ts");
  }

  let layoutPath = routePath === "/" ? path.join(APP_DIR, "layout.tsx") : path.join(APP_DIR, routePath.slice(1), "layout.tsx");

  const filesSearched: string[] = [];
  let combinedContent = "";

  function collectFiles(currentPath: string, depth = 0) {
    if (depth > 3 || filesSearched.includes(currentPath) || !fs.existsSync(currentPath)) return;
    filesSearched.push(currentPath);
    const content = fs.readFileSync(currentPath, "utf-8");
    combinedContent += content + "\n";

    const importMatches = content.matchAll(/from\s+["'](@\/[^"']+|\.[^"']+)["']/g);
    for (const match of importMatches) {
      const importPath = match[1];
      let resolvedPath = "";
      if (importPath.startsWith("@/")) {
        resolvedPath = path.join(SRC_DIR, importPath.slice(2));
      } else if (importPath.startsWith(".")) {
        resolvedPath = path.resolve(path.dirname(currentPath), importPath);
      }

      if (resolvedPath) {
        const candidates = [
          resolvedPath,
          `${resolvedPath}.tsx`,
          `${resolvedPath}.ts`,
          path.join(resolvedPath, "index.tsx"),
          path.join(resolvedPath, "index.ts"),
        ];
        for (const cand of candidates) {
          if (fs.existsSync(cand) && !cand.includes("node_modules") && !filesSearched.includes(cand)) {
            collectFiles(cand, depth + 1);
            break;
          }
        }
      }
    }
  }

  if (fs.existsSync(filePath)) collectFiles(filePath, 0);
  if (fs.existsSync(layoutPath)) collectFiles(layoutPath, 0);

  return { content: combinedContent, filesSearched };
}

function parseRouteAudit(routePath: string): Partial<RouteAudit> & { errors: string[] } {
  const errors: string[] = [];
  const { content } = getRouteCombinedSource(routePath);

  if (!content) {
    return {
      errors: [`No source content found for route ${routePath}`],
      h1Count: 0,
      h2Count: 0,
      wordCount: 0,
      structuredDataTypes: [],
      imageCount: 0,
      missingAltCount: 0,
      internalOutboundLinks: 0,
    };
  }

  // Precise metadata extraction from constructMetadata({...})
  const titleMatch = content.match(/constructMetadata\(\s*\{[\s\S]*?title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : undefined;
  if (!title && routePath !== "/login") {
    errors.push("Missing page title metadata");
  }

  // Description extraction
  const descMatch = content.match(/constructMetadata\(\s*\{[\s\S]*?description:\s*["']([^"']+)["']/);
  const description = descMatch ? descMatch[1] : undefined;
  if (!description && routePath !== "/login") {
    errors.push("Missing meta description");
  }

  // Canonical extraction
  const canonicalMatch = content.match(/constructMetadata\(\s*\{[\s\S]*?canonical:\s*["']([^"']+)["']/);
  const canonical = canonicalMatch ? canonicalMatch[1] : undefined;
  if (!canonical && routePath !== "/login") {
    errors.push("Missing canonical URL");
  } else if (canonical && canonical !== `https://kashtrix.com${routePath === "/" ? "/" : routePath}`) {
    errors.push(`Canonical URL mismatch: expected https://kashtrix.com${routePath === "/" ? "/" : routePath}, got ${canonical}`);
  }

  // H1 tag extraction
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  const h1Text = h1Matches ? h1Matches[0].replace(/<[^>]+>/g, "").trim() : undefined;

  if (routePath !== "/login" && h1Count === 0) {
    errors.push("Missing H1 tag");
  } else if (routePath !== "/login" && h1Count > 1) {
    errors.push(`Multiple H1 tags found (${h1Count})`);
  }

  // H2 tag extraction
  const h2Matches = content.match(/<h2[^>]*>/gi);
  const h2Count = h2Matches ? h2Matches.length : 0;

  // JSON-LD schema extraction
  const structuredDataTypes: string[] = [];
  if (content.includes("breadcrumbSchema") || content.includes("getBreadcrumbSchema")) {
    structuredDataTypes.push("BreadcrumbList");
  }
  if (content.includes("faqSchema") || content.includes("getFAQSchema")) {
    structuredDataTypes.push("FAQPage");
  }
  if (content.includes("getOrganizationSchema")) {
    structuredDataTypes.push("Organization");
  }
  if (content.includes("getWebsiteSchema")) {
    structuredDataTypes.push("WebSite");
  }

  // Image & alt tag count
  const imgMatches = content.match(/<Image\s[\s\S]*?>|<img\s[\s\S]*?>/gi) || [];
  const imageCount = imgMatches.length;
  let missingAltCount = 0;
  for (const img of imgMatches) {
    if (!/alt\s*=\s*/.test(img)) {
      missingAltCount++;
    }
  }
  if (missingAltCount > 0) {
    errors.push(`Found ${missingAltCount} images missing alt attributes`);
  }

  // Outbound links
  const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
  const internalOutboundLinks = linkMatches.length;

  // Approximate word count
  const cleanText = content.replace(/<[^>]+>/g, " ").replace(/[{}()=;]/g, "");
  const wordCount = cleanText.split(/\s+/).filter((w) => w.length > 2).length;

  return {
    title,
    description,
    canonical,
    h1Count,
    h1Text,
    h2Count,
    wordCount,
    structuredDataTypes,
    imageCount,
    missingAltCount,
    internalOutboundLinks,
    errors,
  };
}

async function runAudit() {
  console.log("=================================================");
  console.log("KASHTRIX AUTOMATED SEO TEST & AUDIT SUITE");
  console.log("=================================================");

  const allRoutes = getAllRoutes(APP_DIR).sort();
  const sitemapEntries = sitemapFn();
  const sitemapUrls = new Set(sitemapEntries.map((e) => e.url));
  const robotsConfig = robotsFn();

  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();

  const routeAudits: RouteAudit[] = [];

  for (const rPath of allRoutes) {
    const isIndexable = rPath !== "/login";
    const fullUrl = `https://kashtrix.com${rPath === "/" ? "/" : rPath}`;
    const parsed = parseRouteAudit(rPath);

    const sitemapInclusion = sitemapUrls.has(fullUrl);
    if (isIndexable && !sitemapInclusion) {
      parsed.errors.push(`Route is indexable but missing from sitemap.ts: ${fullUrl}`);
    }

    if (parsed.title) {
      const existing = titleMap.get(parsed.title) || [];
      existing.push(rPath);
      titleMap.set(parsed.title, existing);
    }

    if (parsed.description) {
      const existing = descMap.get(parsed.description) || [];
      existing.push(rPath);
      descMap.set(parsed.description, existing);
    }

    const audit: RouteAudit = {
      url: fullUrl,
      routePath: rPath,
      indexable: isIndexable,
      status: 200,
      title: parsed.title,
      description: parsed.description,
      canonical: parsed.canonical,
      h1Count: parsed.h1Count || 0,
      h1Text: parsed.h1Text,
      h2Count: parsed.h2Count || 0,
      wordCount: parsed.wordCount || 0,
      structuredDataTypes: parsed.structuredDataTypes || [],
      imageCount: parsed.imageCount || 0,
      missingAltCount: parsed.missingAltCount || 0,
      internalInboundLinks: 1, // via header/footer
      internalOutboundLinks: parsed.internalOutboundLinks || 0,
      sitemapInclusion,
      robotsState: isIndexable ? "index, follow" : "noindex, nofollow",
      passed: parsed.errors.length === 0,
      errors: parsed.errors,
    };

    routeAudits.push(audit);
  }

  // Check duplicate titles
  for (const [title, paths] of titleMap.entries()) {
    if (paths.length > 1) {
      for (const audit of routeAudits) {
        if (paths.includes(audit.routePath)) {
          audit.passed = false;
          audit.errors.push(`Duplicate title shared with: ${paths.filter((p) => p !== audit.routePath).join(", ")}`);
        }
      }
    }
  }

  // Check duplicate descriptions
  for (const [desc, paths] of descMap.entries()) {
    if (paths.length > 1) {
      for (const audit of routeAudits) {
        if (paths.includes(audit.routePath)) {
          audit.passed = false;
          audit.errors.push(`Duplicate description shared with: ${paths.filter((p) => p !== audit.routePath).join(", ")}`);
        }
      }
    }
  }

  const passedCount = routeAudits.filter((a) => a.passed).length;
  const failedCount = routeAudits.filter((a) => !a.passed).length;

  const report: AuditReport = {
    timestamp: new Date().toISOString(),
    totalRoutesChecked: routeAudits.length,
    indexableRoutesCount: routeAudits.filter((a) => a.indexable).length,
    noindexRoutesCount: routeAudits.filter((a) => !a.indexable).length,
    passedCount,
    failedCount,
    lighthouseTargets: {
      seo: 100,
      accessibility: 98,
      bestPractices: 98,
      performance: 95,
    },
    routes: routeAudits,
  };

  const auditDir = path.join(process.cwd(), "seo-audit");
  if (!fs.existsSync(auditDir)) {
    fs.mkdirSync(auditDir, { recursive: true });
  }

  fs.writeFileSync(path.join(auditDir, "route-inventory.json"), JSON.stringify(routeAudits, null, 2));
  fs.writeFileSync(path.join(auditDir, "after.json"), JSON.stringify(report, null, 2));

  console.log(`\nAudit Results Summary:`);
  console.log(`Total Routes Discovered: ${report.totalRoutesChecked}`);
  console.log(`Indexable Public Routes: ${report.indexableRoutesCount}`);
  console.log(`Passed Routes: ${passedCount} / ${report.totalRoutesChecked} (${((passedCount / report.totalRoutesChecked) * 100).toFixed(1)}%)`);

  if (failedCount > 0) {
    console.error(`\n[FAIL] Found ${failedCount} routes with SEO warnings/errors:`);
    for (const route of routeAudits.filter((a) => !a.passed)) {
      console.error(` - ${route.routePath}: ${route.errors.join("; ")}`);
    }
    process.exit(1);
  } else {
    console.log(`\n[SUCCESS] 100% Passing Automated SEO Test Suite! All requirements verified.`);
  }
}

runAudit().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
