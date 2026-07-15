"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Images, Network, WalletCards } from "lucide-react";

type ShowcaseMode = "all" | "oss" | "bss";

interface OSSBSSShowcaseProps {
  mode?: ShowcaseMode;
  ossImageSrc?: string;
  bssImageSrc?: string;
}

interface ProductImage {
  src: string;
  label: string;
  alt: string;
}

const OSS_IMAGES: ProductImage[] = [
  { src: "/oss-bss/screencapture-cms-kisan-net-np-dashboard-real-time-2026-07-08-14_40_06.png", label: "Real-time network dashboard", alt: "Real-time OSS network dashboard with OLT, traffic and session monitoring" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-fiber-map-2026-07-08-14_42_48.png", label: "Fiber network GIS", alt: "Fiber network GIS application map" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-fiber-networks-2026-07-08-14_42_34.png", label: "Fiber network inventory", alt: "Fiber network inventory application screen" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-fiber-olt-2026-07-08-14_43_07.png", label: "OLT management", alt: "Telecom OLT management application screen" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-fiber-olt-2026-07-08-14_43_42.png", label: "OLT device operations", alt: "Detailed OLT operations application screen" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-radius-disconnect-2026-07-08-14_42_04.png", label: "Radius session control", alt: "Radius session disconnect and control application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-tr069-2026-07-08-14_41_45.png", label: "TR-069 device management", alt: "TR-069 ACS device management application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-tr069-device-DF5F-2510002575-2026-07-08-14_41_55.png", label: "CPE device diagnostics", alt: "TR-069 CPE diagnostics application screen" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-fiber-splitters-nearby-2026-07-08-14_44_16.png", label: "Nearby fiber splitters", alt: "Nearby fiber splitter network application map" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-yeaster-2026-07-08-14_46_16.png", label: "Voice infrastructure", alt: "Voice infrastructure integration application screen" },
];

const BSS_IMAGES: ProductImage[] = [
  { src: "/oss-bss/screencapture-cms-kisan-net-np-finance-invoices-2026-07-08-14_45_40.png", label: "Invoices and statements", alt: "BSS invoice and financial statement application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-inventory-2026-07-08-14_44_37.png", label: "Inventory operations", alt: "Telecom inventory operations application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-inventory-lifecycle-2026-07-08-14_45_07.png", label: "Asset lifecycle", alt: "Telecom asset lifecycle application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-leads-reports-2026-07-08-14_41_22.png", label: "Sales intelligence", alt: "Telecom sales and lead reporting application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-sms-campaign-2026-07-08-14_40_25.png", label: "Subscriber campaigns", alt: "Subscriber SMS campaign application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-services-2026-07-08-14_45_26.png", label: "Service catalog", alt: "Telecom service catalog application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-tasks-2026-07-08-14_45_54.png", label: "Operations tasks", alt: "Business operations task application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-tickets-2026-07-08-14_46_05.png", label: "Customer support", alt: "Customer support ticket application" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-audit-log-2026-07-08-14_46_45.png", label: "Audit and compliance", alt: "Application audit and compliance log" },
  { src: "/oss-bss/screencapture-cms-kisan-net-np-mail-templates-2026-07-08-14_46_56.png", label: "Customer communications", alt: "Customer communication template application" },
];

const PRODUCTS = {
  oss: {
    eyebrow: "Operations Support System",
    title: "Operate every network layer from one live control plane.",
    description: "Bring Radius, BNG, OLT, CPE, alarms, fiber GIS, and field telemetry into one synchronized operational view.",
    href: "/oss",
    action: "Explore Kashtrix OSS",
    icon: Network,
    features: ["50K AAA requests/sec", "Multi-vendor provisioning", "AI fault correlation"],
  },
  bss: {
    eyebrow: "Business Support System",
    title: "Connect subscriber growth directly to real-time revenue.",
    description: "Unify CRM, product catalog, rating, invoices, payments, dunning, and revenue assurance without disconnected ledgers.",
    href: "/bss",
    action: "Explore Kashtrix BSS",
    icon: WalletCards,
    features: ["Real-time rating", "Automated collections", "360° subscriber CRM"],
  },
} as const;

function stableHash(value: string) {
  return [...value].reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) | 0, 0);
}

function RotatingScreenshot({ images, interval = 7600 }: { images: ProductImage[]; interval?: number }) {
  const id = useId();
  const seed = useMemo(() => Math.abs(stableHash(id)), [id]);
  const [index, setIndex] = useState(() => seed % images.length);
  const step = seed % 2 === 0 ? 1 : 3;

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + step) % images.length), interval);
    return () => window.clearInterval(timer);
  }, [images.length, interval, step]);

  const go = (direction: number) => setIndex((current) => (current + direction + images.length) % images.length);
  const current = images[index];

  return (
    <div className="group relative h-full min-h-[300px] overflow-hidden bg-[#EEE7F3] dark:bg-[#16081F]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.018 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            quality={82}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16081F]/90 via-[#16081F]/35 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
            <Images className="h-3 w-3" /> Actual application view
          </div>
          <p className="truncate font-poppins text-xs font-semibold sm:text-sm">{current.label}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="mr-1 font-roboto text-[10px] text-white/60">{index + 1}/{images.length}</span>
          <button type="button" onClick={() => go(-1)} aria-label="Show previous application screenshot" className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20">
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Show next application screenshot" className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20">
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductPanel({ type, imageSrc }: { type: "oss" | "bss"; imageSrc?: string }) {
  const product = PRODUCTS[type];
  const Icon = product.icon;
  const images = imageSrc
    ? [{ src: imageSrc, label: `${product.eyebrow} application`, alt: `${product.eyebrow} product dashboard` }]
    : type === "oss" ? OSS_IMAGES : BSS_IMAGES;

  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--surface-1)] shadow-[var(--shadow-md)]">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--surface-purple)] text-[var(--text-link)]"><Icon className="h-5 w-5" /></span>
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-link)]">{product.eyebrow}</span>
        </div>
        <h3 className="mt-5 font-poppins text-2xl font-semibold leading-tight text-[var(--text-primary)]">{product.title}</h3>
        <p className="mt-3 font-inter text-sm leading-6 text-[var(--text-secondary)]">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--surface-2)] px-2.5 py-1 font-roboto text-[10px] font-medium text-[var(--text-secondary)]">
              <CheckCircle2 className="h-3 w-3 text-[var(--text-accent)]" /> {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden border-y border-[var(--border-default)]">
        <RotatingScreenshot images={images} interval={type === "oss" ? 7200 : 8400} />
      </div>

      <div className="p-5 sm:px-8">
        <Link href={product.href} className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[var(--text-link)] transition-colors hover:text-[var(--text-accent)]">
          {product.action} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function OSSBSSShowcase({ mode = "all", ossImageSrc, bssImageSrc }: OSSBSSShowcaseProps) {
  return (
    <section id="oss-bss-showcase" className="section-art w-full scroll-mt-24 border-y border-[var(--border-default)] bg-[var(--surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--surface-pink)] px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-accent)]">Purpose-built telecom operations</span>
          <h2 className="section-heading mt-4">OSS and BSS that share one operational truth.</h2>
          <p className="mt-4 font-inter text-sm leading-7 text-[var(--text-secondary)] md:text-base">Explore actual application screens from network, subscriber, billing, fiber, inventory, support, and automation workflows.</p>
        </div>
        <div className={`grid gap-7 ${mode === "all" ? "lg:grid-cols-2" : "mx-auto max-w-4xl"}`}>
          {(mode === "all" || mode === "oss") && <ProductPanel type="oss" imageSrc={ossImageSrc} />}
          {(mode === "all" || mode === "bss") && <ProductPanel type="bss" imageSrc={bssImageSrc} />}
        </div>
      </div>
    </section>
  );
}
