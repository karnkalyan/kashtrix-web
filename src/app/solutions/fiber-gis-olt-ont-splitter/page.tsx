import React from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { MapPin, Network, Cable, Activity, Layers, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Fiber GIS & OLT Splitter ONT Topology Mapping Software | Kashtrix",
  description: "Geospatial fiber GIS mapping software for ISPs and FTTH operators. Map optical distribution networks, splitter loss calculations, OLT to ONT topology, splice enclosures and feeder/distribution fibers.",
  keywords: [
    "Fiber GIS software",
    "FTTH GIS mapping",
    "OLT splitter ONT mapping",
    "fiber topology map",
    "optical distribution network mapping",
    "fiber splice enclosure management",
    "ISP GIS software",
    "optical loss budget calculator"
  ],
  canonical: "https://kashtrix.com/solutions/fiber-gis-olt-ont-splitter",
});

const FAQS = [
  {
    question: "Does Kashtrix Fiber GIS integrate directly with live OLT optical telemetry?",
    answer: "Yes. Kashtrix correlates real-time Rx/Tx optical power readings (dBm) from OLT PON ports and subscriber ONTs with physical GIS map locations, allowing NOC teams to visualize attenuation anomalies across specific fiber runs and splitters."
  },
  {
    question: "Can we import existing KML/KMZ or Shapefiles into Kashtrix Fiber GIS?",
    answer: "Yes. Kashtrix supports standard GIS vector formats including KML, KMZ, GeoJSON, and ESRI Shapefiles. Outdoor plant assets, fiber cables, manholes, splitters, and customer drop points can be imported with attribute mapping."
  },
  {
    question: "How does optical loss budget calculation work in Kashtrix GIS?",
    answer: "Kashtrix automatically calculates cumulative optical loss (dB) based on cable length, fiber attenuation rates per kilometer, connector splice losses, and passive splitter ratios (e.g. 1:4, 1:8, 1:32, 1:64) across every path between the OLT SFP and the subscriber ONT."
  }
];

export default function FiberGISPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", href: "/solutions" },
    { name: "Fiber GIS & OLT Splitter ONT Mapping", href: "/solutions/fiber-gis-olt-ont-splitter" }
  ]);
  const faqSchema = getFAQSchema(FAQS);

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <main className="bg-[var(--page-bg)] text-[var(--text-primary)]">
        {/* Header Section */}
        <section className="pt-20 pb-16 border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-6">
              <Link href="/" className="hover:text-[var(--text-primary)]">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-[var(--text-primary)]">Solutions</Link>
              <span>/</span>
              <span className="text-[var(--text-primary)] font-semibold">Fiber GIS Mapping</span>
            </nav>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--surface-purple)] text-[var(--text-link)] mb-4">
              <MapPin className="w-3.5 h-3.5" /> Geospatial Fiber Intelligence
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora tracking-tight">
              Fiber GIS & OLT Splitter ONT Mapping Software
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Map and manage your physical optical distribution network (ODN) from central office OLTs down to primary splitters, fiber enclosures, drop cables, and end-user ONTs. Combine interactive GIS mapping with real-time optical power metrics and subscriber billing context.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/request-demo" className="inline-flex items-center gap-2 rounded-xl bg-[#E11D72] px-6 py-3 font-sora text-sm font-semibold text-white shadow-lg shadow-[#E11D72]/25 hover:-translate-y-0.5 transition-all">
                Schedule GIS Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/hardware-automation" className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-1)] px-6 py-3 font-inter text-sm font-semibold hover:-translate-y-0.5 transition-all">
                OLT Device Management <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Intent Section */}
        <section className="py-16 bg-[var(--surface-1)] border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold font-sora">The Physical Fiber Management Challenge</h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              As FTTH networks expand, keeping track of physical fiber strands, optical splitters, splice enclosures, and distribution cabinets becomes critical. Static spreadsheets or standalone CAD drawings quickly get out of sync with actual field deployments. When an OTDR trace indicates a fiber break at 4.2 kilometers, NOC teams need exact map coordinates and cable path insights to dispatch technicians accurately.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Kashtrix Fiber GIS bridges physical plant mapping with active network telemetry and subscriber billing. By linking OLT PON ports directly to geospatial splitter trees and subscriber ONTs, field technicians and NOC engineers can pinpoint degradations instantly.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl font-bold font-sora">Core Fiber GIS Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Hierarchical ODN Mapping",
                  desc: "Visualize feeder cables, distribution cables, optical distribution frames (ODF), primary splitters (1:4/1:8), secondary splitters (1:32/1:64), and customer drop wires in a layered vector map."
                },
                {
                  icon: Activity,
                  title: "Optical Power & Loss Budgeting",
                  desc: "Calculate theoretical vs measured optical loss across every passive node. Flag bad splices, excessive bend losses, or degraded SFP transceivers automatically."
                },
                {
                  icon: Cable,
                  title: "Splice Tray & Enclosure Diagrams",
                  desc: "Detailed strand-level fiber splice tray schematics. Track color-coded buffer tubes, loose tubes, fusion splices, and pigtail terminations inside every enclosure."
                },
                {
                  icon: MapPin,
                  title: "OTDR Fault Location Overlay",
                  desc: "Input OTDR fault distance measurements and overlay estimated break locations directly onto road maps and satellite imagery for rapid field dispatch."
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

        {/* FAQ Section */}
        <section className="py-16 border-b border-[var(--border-default)]">
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

        {/* Related Links */}
        <section className="py-16 bg-[var(--surface-1)] border-b border-[var(--border-default)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold font-sora">Explore Related Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "OLT Provisioning", href: "/solutions/olt-provisioning", desc: "Huawei & Nokia OLT management" },
                { label: "Field Operations & GPS", href: "/solutions/isp-field-staff-gps", desc: "Mobile dispatch & tracking" },
                { label: "Network Automation", href: "/network-automation", desc: "Multi-vendor network workflows" }
              ].map((link) => (
                <Link key={link.href} href={link.href} className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--page-bg)] hover:border-purple-500/40 hover:-translate-y-0.5 transition-all">
                  <span className="text-sm font-bold block">{link.label}</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-0.5 block">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl font-bold font-sora">Transform Your Optical Network Visibility</h2>
            <p className="text-sm text-[var(--text-secondary)]">Request a live demo of Kashtrix Fiber GIS and OLT Splitter Topology Mapping.</p>
            <Link href="/request-demo" className="inline-flex items-center gap-2 rounded-xl bg-[#E11D72] px-8 py-3.5 font-sora text-sm font-semibold text-white shadow-lg shadow-[#E11D72]/25 hover:-translate-y-0.5 transition-all">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
