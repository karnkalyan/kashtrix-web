import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeClient } from "./HomeClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ canonical: "https://kashtrix.com/" });

export default async function HomePage() {
  return (
    <SiteShell>
      <HomeClient />
    </SiteShell>
  );
}
