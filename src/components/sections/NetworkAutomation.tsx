"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Play, CheckCircle2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const AUTOMATION_MODULES = [
  { title: "BNG Automation", desc: "Automated subscriber session load balancing across high-capacity Broadband Network Gateways." },
  { title: "BRAS Automation", desc: "Dynamic IP pool allocation and instant AAA server synchronization." },
  { title: "vBNG Automation", desc: "Cloud-native elastic scale-out and automated virtual gateway failover." },
  { title: "Radius Automation", desc: "High-concurrency Change of Authorization (CoA) and session disconnect cadences." },
  { title: "PPPoE Provisioning", desc: "Sub-second zero-touch circuit activation and speed tier verification." },
  { title: "DHCP Option 82", desc: "Circuit-ID and Remote-ID parsing for automated static/dynamic IP binding." },
  { title: "IPAM Pool Control", desc: "Real-time IPv4/IPv6 address pool automated reclamation & assignment." },
  { title: "QoS Policy Shaping", desc: "Automated traffic shaping, priority queueing, and burst allowance configuration." },
  { title: "Subscriber Policy", desc: "Time-of-day access control and automated parental filter enforcement." },
  { title: "Configuration Push", desc: "Atomic template push across 10,000+ edge routers simultaneously." },
  { title: "Session Management", desc: "Live session teardown, re-authentication, and duplicate MAC resolution." },
  { title: "Network Validation", desc: "Pre-check state validation and automatic rollback on syntax error." },
];

export const NetworkAutomation: React.FC = () => {
  const [runningSimulation, setRunningSimulation] = useState(false);
  const [simulationStage, setSimulationStage] = useState(0);

  const triggerSimulation = () => {
    setRunningSimulation(true);
    setSimulationStage(1);
    setTimeout(() => setSimulationStage(2), 700);
    setTimeout(() => setSimulationStage(3), 1500);
    setTimeout(() => setSimulationStage(4), 2300);
    setTimeout(() => {
      setSimulationStage(5);
      setRunningSimulation(false);
    }, 3100);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-[#F8F7FA] border-t border-[#E8DFF0] text-[#1B1024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
            Zero-Touch Broadband Core
          </span>
          <h2 className="section-heading text-[#2B0D3A]">
            Automate subscriber, broadband, and network operations.
          </h2>
          <p className="text-sm md:text-base text-[#6F6078]">
            Orchestrate BNG, vBNG, Radius, DHCP, and OLT workflows with visual drag-and-drop triggers, automated pre-commit state validation, and automatic rollback protection.
          </p>
        </div>

        {/* Mock Automation Builder Grid */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-[#E8DFF0] shadow-2xl p-6 md:p-8 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E8DFF0]">
            <div>
              <h3 className="text-base font-bold font-sora text-[#2B0D3A] flex items-center gap-2">
                <Wifi className="w-4 h-4 text-[#4A1B7A]" /> Live Network Workflow Orchestration Sandbox
              </h3>
              <p className="text-xs text-[#6F6078]">
                Visual Workflow: Dynamic Subscriber Speed Upgrade &amp; Radius CoA Push
              </p>
            </div>

            <button
              onClick={triggerSimulation}
              disabled={runningSimulation}
              className={cn(
                "px-5 py-2.5 rounded-xl font-inter font-semibold text-xs transition-all flex items-center gap-2 shadow-sm",
                runningSimulation
                  ? "bg-[#E8DFF0] text-[#6F6078] cursor-not-allowed"
                  : "bg-[#2B0D3A] text-white hover:bg-[#4A1B7A]"
              )}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {runningSimulation ? "Simulating Workflow..." : "Test Workflow Execution"}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual Workflow Steps */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { label: "Trigger: CRM Package Upgrade Webhook", detail: "POST /api/v1/subscribers/package-change payload received." },
                { label: "Condition Check: OLT Circuit Attenuation", detail: "Verify optical loss is >= -26dBm before enabling 1Gbps tier." },
                { label: "Action: Push Radius CoA Packet", detail: "Send Change-of-Authorization to Cisco ASR-9000-BNG-01." },
                { label: "Validation Check: gNMI Telemetry Poll", detail: "Confirm subscriber interface speed counter switched to 1,000 Mbps." },
                { label: "Rollback Safeguard: Auto-Rollback if < 900 Mbps", detail: "Revert to previous 500Mbps profile if verification fails." },
              ].map((step, idx) => {
                const stepNum = idx + 1;
                const isActive = simulationStage === stepNum;
                const isPassed = simulationStage > stepNum;

                return (
                  <div
                    key={idx}
                    className={cn(
                      "p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3",
                      isActive
                        ? "bg-[#FFFFFF] border-[#E11D72] shadow-md -translate-y-0.5"
                        : isPassed
                        ? "bg-[#F8F7FA] border-[#4A1B7A]/30"
                        : "bg-[#FFFFFF] border-[#E8DFF0] opacity-75"
                    )}
                  >
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                        isActive
                          ? "bg-[#E11D72] text-white animate-pulse"
                          : isPassed
                          ? "bg-[#2B0D3A] text-white"
                          : "bg-[#F4EEFF] text-[#4A1B7A]"
                      )}
                    >
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : stepNum}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold font-sora text-[#2B0D3A]">{step.label}</h4>
                        {isActive && (
                          <span className="text-[10px] font-bold text-[#E11D72] uppercase tracking-wider animate-pulse">
                            Executing...
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6F6078] mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Live Execution Terminal / Preview */}
            <div className="lg:col-span-7 rounded-2xl bg-[#1B1024] border border-[#342044] p-5 text-white font-inter text-xs flex flex-col justify-between min-h-[340px]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#342044]">
                <span className="text-[#9B82B5] font-semibold flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#E11D72]" /> Real-Time Orchestration Output Console
                </span>
                <span className="text-[10px] text-[#E11D72] font-bold uppercase tracking-wider">
                  {simulationStage === 5 ? "Execution Completed" : runningSimulation ? "Active Transaction" : "Idle Ready"}
                </span>
              </div>

              <div className="space-y-2 text-[#F4EEFF] leading-relaxed flex-1 overflow-y-auto max-h-[240px]">
                {simulationStage >= 1 && (
                  <div className="text-[#E8DFF0]">
                    [00:00.12] Trigger activated by webhook. Customer ID: #SUB-8941 | Old Profile: 500M_FTTH | Target Profile: 1G_VIP_FTTH
                  </div>
                )}
                {simulationStage >= 2 && (
                  <div className="text-[#9B82B5]">
                    [00:00.45] Pre-check condition passed. OLT-MA5800-PORT-1/12 optical attenuation: -19.4 dBm (Optimal range verified).
                  </div>
                )}
                {simulationStage >= 3 && (
                  <div className="text-[#E11D72]">
                    [00:01.10] Sending Radius CoA (Disconnect-Request + Re-Auth) to ASR-9000-BNG-01 with Session-Id: &apos;sess_tokyo_9912&apos;.
                  </div>
                )}
                {simulationStage >= 4 && (
                  <div className="text-[#F4EEFF]">
                    [00:01.54] gNMI validation confirmed subscriber interface speed counter at 1,000 Mbps.
                  </div>
                )}
                {simulationStage >= 5 && (
                  <div className="p-3 rounded-lg bg-[#2B0D3A] border border-[#4A1B7A] space-y-1 mt-3 text-white font-bold">
                    <div className="flex items-center gap-2 text-[#E11D72]">
                      <CheckCircle2 className="w-4 h-4" /> [SUCCESS] Workflow Executed &amp; Verified (1.82s Total Latency)
                    </div>
                    <div className="text-[11px] font-normal text-[#E8DFF0]">
                      Subscriber circuit speed verified at 998 Mbps symmetrical throughput. CRM status updated automatically. Audit record logged to PostgreSQL.
                    </div>
                  </div>
                )}
                {simulationStage === 0 && (
                  <div className="h-full flex items-center justify-center text-center text-[#6F6078] py-12">
                    Click &quot;Test Workflow Execution&quot; above to run atomic network validation.
                  </div>
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-[#342044] flex items-center justify-between text-[11px] text-[#9B82B5]">
                <span>State Rollback Safeguard: Armed &amp; Ready</span>
                <span className="text-[#F4EEFF] font-semibold">SLA Target: Zero Packet Drop</span>
              </div>
            </div>
          </div>
        </div>

        {/* 12 Core Automation Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {AUTOMATION_MODULES.map((mod, idx) => (
            <div
              key={mod.title}
              className="p-4 rounded-xl border border-[#E8DFF0] bg-[#FFFFFF] hover:border-[#4A1B7A] transition-all duration-200"
            >
              <h4 className="text-xs font-bold font-sora text-[#2B0D3A] mb-1">{mod.title}</h4>
              <p className="text-xs text-[#6F6078] leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
