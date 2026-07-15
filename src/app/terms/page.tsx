import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { FileCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service | Kashtrix Telecom Platform",
  description: "Terms and conditions governing access to the Kashtrix AI-native telecom OSS/BSS, network automation, and hardware orchestration platform.",
  canonical: "https://kashtrix.com/terms",
});

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <div className="pt-16 pb-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#1B1024]">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
              <FileCheck className="w-3.5 h-3.5" /> Legal Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-sora text-[#2B0D3A]">Terms of Service</h1>
            <p className="text-xs text-[#6F6078]">Effective Date: March 30, 2026</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F7FA] border border-[#E8DFF0] space-y-6 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold font-sora text-[#2B0D3A]">1. Enterprise License &amp; Service SLA</h2>
              <p>
                By accessing or subscribing to the Kashtrix Platform, your organization agrees to these Terms of Service. Kashtrix guarantees an operational uptime SLA between 99.99% and 99.999% depending on your contracted tier (Regional ISP, National Operator, or Tier-1 Carrier Enterprise). Automated SLA credits apply automatically for unplanned service degradation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold font-sora text-[#2B0D3A]">2. Hardware Orchestration Safeguards &amp; Rollback</h2>
              <p>
                While Kashtrix provides automated pre-commit syntax validation and rollback loops for multi-vendor network equipment (Cisco, Huawei, Nokia, Juniper), the customer remains responsible for defining approval policies and maintenance window parameters within the platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold font-sora text-[#2B0D3A]">3. Billing &amp; Circuit Auditing</h2>
              <p>
                Subscription fees are calculated monthly or annually based on the volume of active subscriber circuits and optical ports provisioned across your OLT and BNG gateways. Circuit audits occur automatically on the 1st of each calendar month.
              </p>
            </section>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
