"use client";

import React from "react";
import { Terminal, ShieldCheck } from "lucide-react";
import { APIFlowAnimation } from "@/components/visual/APIFlowAnimation";

export const APIAutomation: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-[#FFFFFF] text-[#1B1024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
            Open API &amp; Webhooks Platform
          </span>
          <h2 className="section-heading text-[#2B0D3A]">
            Connect, automate, and extend every system.
          </h2>
          <p className="text-sm md:text-base text-[#6F6078]">
            Kashtrix provides REST, GraphQL, and Webhook endpoints for every core model—from subscriber Radius sessions and OLT optical attenuation to billing invoices and AI task queues.
          </p>
        </div>

        {/* Embedded API Flow Animation & Console */}
        <APIFlowAnimation />
      </div>
    </section>
  );
};
