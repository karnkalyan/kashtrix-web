import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Secure Login | Kashtrix",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "https://kashtrix.com/login" },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
