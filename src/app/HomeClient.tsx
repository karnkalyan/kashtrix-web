"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { AIAgents } from "@/components/sections/AIAgents";
import { NetworkAutomation } from "@/components/sections/NetworkAutomation";
import { HardwareAutomation } from "@/components/sections/HardwareAutomation";
import { VoiceAutomation } from "@/components/sections/VoiceAutomation";
import { TelecomWorkflow } from "@/components/sections/TelecomWorkflow";
import { APIAutomation } from "@/components/sections/APIAutomation";
import { Industries } from "@/components/sections/Industries";
import { GlobalReady } from "@/components/sections/GlobalReady";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { RequestDemoModal } from "@/components/layout/RequestDemoModal";
import { ParticleSectionSeparator } from "@/components/visual/ParticleSectionSeparator";

export const HomeClient: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <HeroSection onRequestDemo={() => setIsDemoModalOpen(true)} />
      <TrustStrip />
      <PlatformOverview />
      <ParticleSectionSeparator />
      <ProductArchitecture />
      <AIAgents />
      <NetworkAutomation />
      <HardwareAutomation />
      <VoiceAutomation />
      <TelecomWorkflow />
      <APIAutomation />
      <Industries />
      <GlobalReady />
      <SecuritySection />
      <FinalCTA onRequestDemo={() => setIsDemoModalOpen(true)} />
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};
