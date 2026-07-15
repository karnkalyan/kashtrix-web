"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Globe, CheckCircle2, CreditCard, WalletCards } from "lucide-react";
import { AnimatedLogo } from "@/components/visual/AnimatedLogo";

const PAYMENT_GATEWAYS = [
  "Apple Pay",
  "Google Pay",
  "Stripe",
  "InstaPay",
  "Razorpay",
  "eSewa",
  "Khalti",
  "Fonepay",
  "Amazon Pay",
  "PayPal",
  "Visa",
  "Mastercard",
  "Bank Transfer",
  "Kashtrix Internal Gateway",
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerColumns = [
    {
      title: "Platform & Core",
      links: [
        { label: "Platform Overview", href: "/platform" },
        { label: "Unified OSS Core", href: "/oss" },
        { label: "Unified BSS & Rating", href: "/bss" },
        { label: "AI Agents Grid", href: "/ai-agents" },
        { label: "NOC Network Management", href: "/network-management" },
        { label: "Billing & Revenue Assurance", href: "/billing" },
        { label: "CRM & Customer Portal", href: "/crm" },
      ],
    },
    {
      title: "Automation Engines",
      links: [
        { label: "Network Automation", href: "/network-automation" },
        { label: "Hardware Orchestration", href: "/hardware-automation" },
        { label: "AI Voice Automation", href: "/voice-automation" },
        { label: "Field Operations & Dispatch", href: "/field-operations" },
        { label: "Inventory Lifecycle", href: "/inventory" },
        { label: "API Platform & SDKs", href: "/api-platform" },
        { label: "Integrations & Webhooks", href: "/integrations" },
      ],
    },
    {
      title: "Solutions & Industries",
      links: [
        { label: "Internet Service Providers (ISPs)", href: "/industries#isps" },
        { label: "FTTH & GPON Operators", href: "/industries#ftth" },
        { label: "Wireless Operators (WISPs)", href: "/industries#wireless" },
        { label: "Cable & DOCSIS Networks", href: "/industries#cable" },
        { label: "VoIP Providers", href: "/industries#voip" },
        { label: "Managed IT & SD-WAN", href: "/industries#msp" },
        { label: "Enterprise Pricing Plans", href: "/pricing" },
      ],
    },
    {
      title: "Resources & Trust",
      links: [
        { label: "Documentation", href: "/documentation" },
        { label: "API Reference", href: "/api-platform" },
        { label: "Resources Hub & Blog", href: "/resources" },
        { label: "About Kashtrix", href: "/about" },
        { label: "Contact Our Architects", href: "/contact" },
        { label: "Security & Zero Trust", href: "/security" },
        { label: "Request Custom Demo", href: "/request-demo" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E8DFF0] text-[#1B1024] relative overflow-hidden">
      {/* Top Banner: Newsletter & Global Readiness */}
      <div className="bg-[#F8F7FA] border-b border-[#E8DFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-[#F4EEFF] text-[#4A1B7A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D72] animate-pulse" />
              Continuous Telecom Architecture
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-sora text-[#2B0D3A]">
              Where Networks, Business, and AI Work Together.
            </h3>
            <p className="text-xs md:text-sm text-[#6F6078]">
              Join 15,000+ NOC engineers receiving weekly multi-vendor automation scripts and AI intelligence updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#F4EEFF] text-[#4A1B7A] text-xs font-bold font-sora">
                <CheckCircle2 className="w-4 h-4 text-[#E11D72]" /> You are subscribed to Kashtrix Engineering Dispatch.
              </div>
            ) : (
              <>
                <div className="relative flex-1 sm:w-72">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6F6078]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email address..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E8DFF0] text-xs focus:outline-none focus:border-[#4A1B7A] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs hover:bg-[#4A1B7A] transition-all shadow-sm shrink-0"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Global Offices */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <AnimatedLogo size="lg" variant="stacked" className="!h-24 !w-52" />
            </Link>
            <p className="text-xs text-[#6F6078] leading-relaxed max-w-sm">
              Kashtrix unifies OSS, BSS, CRM, billing, payments, network operations, subscriber management, hardware automation, support, field service, inventory, analytics, voice automation, APIs, and AI agents into one intelligent platform.
            </p>

            <div className="space-y-2 pt-2 border-t border-[#E8DFF0]/60 text-xs text-[#1B1024]">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#4A1B7A]" />
                <span>Global presence: Dubai, Singapore, Dallas (US), and Kathmandu (Nepal)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E11D72]" />
                <a href="mailto:info@kashtrix.com" className="hover:text-[#4A1B7A]">Contact: info@kashtrix.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8F7FA] border border-[#E8DFF0] text-[11px] font-bold text-[#2B0D3A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A1B7A]" /> SOC 2 Type II Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8F7FA] border border-[#E8DFF0] text-[11px] font-bold text-[#2B0D3A]">
                ISO 27001 Compliant
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B0D3A] font-sora">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-[#6F6078] hover:text-[#2B0D3A] hover:underline transition-colors block leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supported Payment Gateways */}
      <div className="border-t border-[#E8DFF0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="shrink-0">
              <div className="flex items-center gap-2 font-sora text-sm font-semibold text-[#2B0D3A]">
                <WalletCards className="h-4 w-4 text-[#E11D72]" />
                Payment gateways supported
              </div>
              <p className="mt-1 max-w-md font-inter text-xs leading-relaxed text-[#6F6078]">
                Accept regional and global payments through native connectors or the secure Kashtrix internal payment gateway.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {PAYMENT_GATEWAYS.map((gateway) => (
                <span
                  key={gateway}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8DFF0] bg-[#F8F7FA] px-2.5 py-1.5 font-inter text-[11px] font-medium text-[#514458] transition-colors hover:border-[#BBA8C8] hover:bg-[#F4EEFF]"
                >
                  <CreditCard className="h-3 w-3 text-[#4A1B7A]" />
                  {gateway}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Strip */}
      <div className="border-t border-[#E8DFF0] bg-[#F8F7FA]/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6F6078]">
          <div>
            &copy; {new Date().getFullYear()} Kashtrix Technologies Inc. All rights reserved. Every System. One Platform. Limitless AI Possibilities.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-[#2B0D3A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#2B0D3A] transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-[#2B0D3A] transition-colors">
              Security Center
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#2B0D3A] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
