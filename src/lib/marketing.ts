export type ServiceAccent =
  | "oss"
  | "bss"
  | "billing"
  | "support"
  | "noc"
  | "msp"
  | "isp"
  | "fiber"
  | "wireless"
  | "security"
  | "field"
  | "integrations"
  | "inventory"
  | "ai";

export const SERVICE_ACCENTS: Record<ServiceAccent, { primary: string; secondary: string; soft: string; gradient: string }> = {
  oss: { primary: "#06B6D4", secondary: "#3B82F6", soft: "rgba(6,182,212,.12)", gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)" },
  bss: { primary: "#EC4899", secondary: "#8B5CF6", soft: "rgba(236,72,153,.12)", gradient: "linear-gradient(135deg,#EC4899,#8B5CF6)" },
  billing: { primary: "#F59E0B", secondary: "#EF4444", soft: "rgba(245,158,11,.12)", gradient: "linear-gradient(135deg,#F59E0B,#EF4444)" },
  support: { primary: "#0EA5E9", secondary: "#14B8A6", soft: "rgba(14,165,233,.12)", gradient: "linear-gradient(135deg,#0EA5E9,#14B8A6)" },
  noc: { primary: "#10B981", secondary: "#06B6D4", soft: "rgba(16,185,129,.12)", gradient: "linear-gradient(135deg,#10B981,#06B6D4)" },
  msp: { primary: "#0D9488", secondary: "#4F46E5", soft: "rgba(13,148,136,.12)", gradient: "linear-gradient(135deg,#0D9488,#4F46E5)" },
  isp: { primary: "#2563EB", secondary: "#6366F1", soft: "rgba(37,99,235,.12)", gradient: "linear-gradient(135deg,#2563EB,#6366F1)" },
  fiber: { primary: "#059669", secondary: "#0284C7", soft: "rgba(5,150,105,.12)", gradient: "linear-gradient(135deg,#059669,#0284C7)" },
  wireless: { primary: "#6366F1", secondary: "#A855F7", soft: "rgba(99,102,241,.12)", gradient: "linear-gradient(135deg,#6366F1,#A855F7)" },
  security: { primary: "#16A34A", secondary: "#0D9488", soft: "rgba(22,163,74,.12)", gradient: "linear-gradient(135deg,#16A34A,#0D9488)" },
  field: { primary: "#EA580C", secondary: "#D97706", soft: "rgba(234,88,12,.12)", gradient: "linear-gradient(135deg,#EA580C,#D97706)" },
  integrations: { primary: "#8B5CF6", secondary: "#06B6D4", soft: "rgba(139,92,246,.12)", gradient: "linear-gradient(135deg,#8B5CF6,#06B6D4)" },
  inventory: { primary: "#D97706", secondary: "#9333EA", soft: "rgba(217,119,6,.12)", gradient: "linear-gradient(135deg,#D97706,#9333EA)" },
  ai: { primary: "#A855F7", secondary: "#EC4899", soft: "rgba(168,85,247,.12)", gradient: "linear-gradient(135deg,#A855F7,#EC4899)" },
};

export const OSS_BSS_ASSETS = {
  ossOverview: "/oss-bss/screencapture-localhost-3000-noc-dashboard-2026-07-31-02_09_30.png",
  nocMonitoring: "/oss-bss/screencapture-10-3-2-30-5173-alerts-2026-07-31-02_33_01.png",
  fiberMap: "/oss-bss/screencapture-localhost-3000-fiber-olt-2026-07-31-02_08_42.png",
  fiberNetworks: "/oss-bss/screencapture-localhost-3000-network-onts-2026-07-31-02_09_15.png",
  oltManagement: "/oss-bss/screencapture-localhost-3000-fiber-olt-2026-07-31-02_08_58.png",
  radiusControl: "/oss-bss/screencapture-10-3-2-30-5173-radius-2026-07-31-02_21_51.png",
  radiusDisconnect: "/oss-bss/screencapture-localhost-3000-radius-disconnect-2026-07-31-02_09_59.png",
  tr069: "/oss-bss/screencapture-localhost-3000-tr069-2026-07-31-01_57_21.png",
  tr069Device: "/oss-bss/screencapture-localhost-3000-tr069-device-DF5F-2510002575-2026-07-31-02_03_20.png",
  networkInventory: "/oss-bss/screencapture-localhost-3000-network-onts-2026-07-31-02_09_15.png",
  bssOverview: "/oss-bss/screencapture-10-3-2-30-5173-subscribers-karnkalyan-2026-07-31-02_32_48.png",
  billing: "/oss-bss/screencapture-localhost-3000-accounting-2026-07-31-02_04_49.png",
  customerManagement: "/oss-bss/screencapture-localhost-3000-leads-view-21063-2026-07-31-02_36_04.png",
  revenueManagement: "/oss-bss/screencapture-localhost-3000-accounting-2026-07-31-02_04_49.png",
  support: "/oss-bss/screencapture-localhost-3000-tickets-1-2026-07-31-02_05_21.png",
  fieldTasks: "/oss-bss/screencapture-localhost-3000-tasks-1-2026-07-31-02_08_21.png",
  inventoryLifecycle: "/oss-bss/screencapture-localhost-3000-network-onts-2026-07-31-02_09_15.png",
  campaigns: "/oss-bss/screencapture-localhost-3000-leads-2026-07-31-02_35_40.png",
  voice: "/oss-bss/screencapture-localhost-3000-yeaster-2026-07-31-02_04_34.png",
  aiAgents: "/oss-bss/screencapture-localhost-3000-ai-agents-4-edit-2026-07-31-02_28_18.png",
  asterisk: "/oss-bss/screencapture-localhost-3000-asterisk-2026-07-31-02_04_09.png",
} as const;
