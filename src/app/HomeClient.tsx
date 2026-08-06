"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { OSSBSSShowcase } from "@/components/sections/OSSBSSShowcase";
import { MCPServerSection } from "@/components/sections/MCPServerSection";
import { AIAgents } from "@/components/sections/AIAgents";
import { GlobalReady } from "@/components/sections/GlobalReady";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { RequestDemoModal } from "@/components/layout/RequestDemoModal";

export const HomeClient: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-[var(--page-bg)]">
      <HeroSection onRequestDemo={() => setIsDemoModalOpen(true)} />
      <TrustStrip />
      <OSSBSSShowcase />
      <MCPServerSection />
      <AIAgents />
      <GlobalReady />
      <FinalCTA onRequestDemo={() => setIsDemoModalOpen(true)} />
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  );
};
