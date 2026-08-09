import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { Building2, Users, CreditCard, ShieldCheck, Layers, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "ISP Branch & Reseller Multi-Tenant Management Platform | Kashtrix",
  description: "Multi-branch ISP management software for regional operators, franchisees, and sub-dealers. Isolate billing, delegate IP pools, manage reseller prepaid wallets, and track multi-level commission payouts.",
  keywords: [
    "ISP branch management software",
    "ISP reseller management platform",
    "multi-tenant ISP billing",
    "franchisee ISP software",
    "sub-dealer billing platform",
    "reseller wallet management ISP",
    "telecom reseller portal",
    "regional ISP management"
  ],
  canonical: "https://kashtrix.com/solutions/isp-branch-reseller-management",
});

const FAQS = [
  {
    question: "Can branch managers view only their assigned subscribers and revenue?",
    answer: "Yes. Kashtrix provides strict multi-tenant role-based access control (RBAC). Branch managers and regional admins see only their assigned territory, subscribers, billing reports, and network devices."
  },
  {
    question: "How does the reseller prepaid wallet system function?",
    answer: "Resellers top up a prepaid balance via online payment gateways or bank transfer. When creating or renewing a subscriber service, the wholesale plan cost is automatically deducted from the reseller's wallet while the end-user receives their invoice."
  },
  {
    question: "Can different branches have custom service plans and pricing?",
    answer: "Yes. Head office admins can define global plan templates or grant branch managers permission to configure localized pricing tiers, bandwidth limits, and promotional offers."
  }
];

export default function BranchResellerManagementPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", href: "/solutions" },
    { name: "ISP Branch & Reseller Management", href: "/solutions/isp-branch-reseller-management" }
  ]);
  const faqSchema = getFAQSchema(FAQS);

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <main className="bg-[var(--page-bg)] text-[var(--text-primary)]">
        <section className="pt-20 pb-16 border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-6">
              <Link href="/" className="hover:text-[var(--text-primary)]">Home</Link>
              <span>/</span>
              <Link href="/bss" className="hover:text-[var(--text-primary)]">BSS & Billing</Link>
              <span>/</span>
              <span className="text-[var(--text-primary)] font-semibold">Branch & Reseller Management</span>
            </nav>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
              <Building2 className="w-3.5 h-3.5" /> Multi-Tenant Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora tracking-tight">
              ISP Branch & Reseller Multi-Tenant Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Scale your telecom business across multiple cities, regional branches, and third-party reseller networks. Maintain centralized network policy enforcement while granting local branches isolated billing, CRM management, and self-service reseller portals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/request-demo" className="inline-flex items-center gap-2 rounded-xl bg-[#E11D72] px-6 py-3 font-sora text-sm font-semibold text-white shadow-lg shadow-[#E11D72]/25 hover:-translate-y-0.5 transition-all">
                Request Reseller Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/bss" className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-1)] px-6 py-3 font-inter text-sm font-semibold hover:-translate-y-0.5 transition-all">
                Explore Telecom BSS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--surface-1)] border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold font-sora">The Multi-Branch Growth Bottleneck</h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Expanding an ISP through regional branch offices and local sub-dealers often leads to fragmented data. Using separate billing software per branch causes accounting chaos, while giving external resellers full admin access creates severe security and data privacy risks.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Kashtrix solves this with native multi-tenancy. Central headquarters retains master control over network infrastructure, RADIUS authentication, and wholesale IP bandwidth, while regional branches and franchisees operate independently within their own secure tenant boundaries.
            </p>
          </div>
        </section>

        <section className="py-16 border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl font-bold font-sora">Core Multi-Tenant Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Hierarchical Multi-Tenancy",
                  desc: "Structure your business into Head Office > Regional Branches > Franchisees > Sub-Dealers with granular permissions."
                },
                {
                  icon: CreditCard,
                  title: "Reseller Wallet & Billing",
                  desc: "Automate prepaid wallet top-ups, commission splits, wholesale margin calculations, and real-time balance enforcement."
                },
                {
                  icon: Users,
                  title: "Branded Reseller Portals",
                  desc: "Provide sub-dealers with custom white-labeled portals to register subscribers, issue vouchers, and process invoice payments."
                },
                {
                  icon: Layers,
                  title: "Delegated Subnet & NAS Management",
                  desc: "Assign dedicated IP subnets, VLAN ranges, and NAS routers to specific branches while maintaining centralized RADIUS AAA control."
                }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--surface-1)] space-y-3">
                  <item.icon className="w-6 h-6 text-[var(--text-link)]" />
                  <h3 className="text-base font-bold font-sora">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--surface-1)] border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl font-bold font-sora">Frequently Asked Questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question} className="space-y-2 pb-6 border-b border-[var(--border-default)] last:border-0">
                <h3 className="text-sm font-bold text-[var(--text-primary)]">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold font-sora">Explore Related Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "BSS & Billing Hub", href: "/bss", desc: "Subscriber billing & revenue" },
                { label: "ISP CRM Software", href: "/crm", desc: "Subscriber management & portal" },
                { label: "FreeRADIUS Billing", href: "/solutions/freeradius-mikrotik-billing", desc: "AAA subscriber authentication" }
              ].map((link) => (
                <Link key={link.href} href={link.href} className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--surface-1)] hover:border-purple-500/40 hover:-translate-y-0.5 transition-all">
                  <span className="text-sm font-bold block">{link.label}</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-0.5 block">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl font-bold font-sora">Scale Your Reseller Network Today</h2>
            <p className="text-sm text-[var(--text-secondary)]">Request a live demonstration of Kashtrix multi-tenant branch and reseller management.</p>
            <Link href="/request-demo" className="inline-flex items-center gap-2 rounded-xl bg-[#E11D72] px-8 py-3.5 font-sora text-sm font-semibold text-white shadow-lg shadow-[#E11D72]/25 hover:-translate-y-0.5 transition-all">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
