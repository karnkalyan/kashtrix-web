import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { getOrganizationSchema, getSoftwareApplicationSchema, getWebsiteSchema } from "@/lib/seo";

export const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = constructMetadata({ canonical: "https://kashtrix.com" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${sora.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="bg-[#F8F7FA] text-[#1B1024] selection:bg-[#E11D72] selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }} />
      </body>
    </html>
  );
}
