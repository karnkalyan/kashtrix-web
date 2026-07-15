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
  oss: { primary: "#4A1B7A", secondary: "#2563EB", soft: "rgba(37,99,235,.10)", gradient: "linear-gradient(135deg,#4A1B7A,#2563EB)" },
  bss: { primary: "#E11D72", secondary: "#7C3A9E", soft: "rgba(225,29,114,.10)", gradient: "linear-gradient(135deg,#7C3A9E,#E11D72)" },
  billing: { primary: "#E11D72", secondary: "#F05298", soft: "rgba(225,29,114,.10)", gradient: "linear-gradient(135deg,#7C3A9E,#E11D72)" },
  support: { primary: "#0EA5E9", secondary: "#4A1B7A", soft: "rgba(14,165,233,.10)", gradient: "linear-gradient(135deg,#2563EB,#4A1B7A)" },
  noc: { primary: "#4A1B7A", secondary: "#6366F1", soft: "rgba(99,102,241,.10)", gradient: "linear-gradient(135deg,#2B0D3A,#4A1B7A)" },
  msp: { primary: "#0F9F8F", secondary: "#4A1B7A", soft: "rgba(15,159,143,.10)", gradient: "linear-gradient(135deg,#0F9F8F,#4A1B7A)" },
  isp: { primary: "#2563EB", secondary: "#0EA5E9", soft: "rgba(37,99,235,.10)", gradient: "linear-gradient(135deg,#2563EB,#4A1B7A)" },
  fiber: { primary: "#0891B2", secondary: "#6366F1", soft: "rgba(8,145,178,.10)", gradient: "linear-gradient(135deg,#0891B2,#6366F1)" },
  wireless: { primary: "#6366F1", secondary: "#E11D72", soft: "rgba(99,102,241,.10)", gradient: "linear-gradient(135deg,#6366F1,#E11D72)" },
  security: { primary: "#168A5B", secondary: "#4A1B7A", soft: "rgba(22,138,91,.10)", gradient: "linear-gradient(135deg,#168A5B,#4A1B7A)" },
  field: { primary: "#D97706", secondary: "#EA6A20", soft: "rgba(217,119,6,.10)", gradient: "linear-gradient(135deg,#D97706,#E11D72)" },
  integrations: { primary: "#6366F1", secondary: "#0EA5E9", soft: "rgba(99,102,241,.10)", gradient: "linear-gradient(135deg,#4A1B7A,#0EA5E9)" },
  inventory: { primary: "#D97706", secondary: "#7C3A9E", soft: "rgba(217,119,6,.10)", gradient: "linear-gradient(135deg,#D97706,#7C3A9E)" },
  ai: { primary: "#E11D72", secondary: "#4A1B7A", soft: "rgba(225,29,114,.10)", gradient: "linear-gradient(135deg,#4A1B7A,#E11D72)" },
};

export const OSS_BSS_ASSETS = {
  ossOverview: "/oss-bss/screencapture-cms-kisan-net-np-dashboard-real-time-2026-07-08-14_40_06.png",
  nocMonitoring: "/oss-bss/screencapture-cms-kisan-net-np-dashboard-real-time-2026-07-08-14_40_06.png",
  fiberMap: "/oss-bss/screencapture-cms-kisan-net-np-fiber-map-2026-07-08-14_42_48.png",
  fiberNetworks: "/oss-bss/screencapture-cms-kisan-net-np-fiber-networks-2026-07-08-14_42_34.png",
  oltManagement: "/oss-bss/screencapture-cms-kisan-net-np-fiber-olt-2026-07-08-14_43_07.png",
  radiusControl: "/oss-bss/screencapture-cms-kisan-net-np-radius-disconnect-2026-07-08-14_42_04.png",
  tr069: "/oss-bss/screencapture-cms-kisan-net-np-tr069-2026-07-08-14_41_45.png",
  networkInventory: "/oss-bss/screencapture-cms-kisan-net-np-inventory-2026-07-08-14_44_37.png",
  bssOverview: "/oss-bss/screencapture-cms-kisan-net-np-customers-3-2026-07-08-14_47_23.png",
  billing: "/oss-bss/screencapture-cms-kisan-net-np-finance-invoices-2026-07-08-14_45_40.png",
  customerManagement: "/oss-bss/screencapture-cms-kisan-net-np-customers-3-2026-07-08-14_47_23.png",
  revenueManagement: "/oss-bss/screencapture-cms-kisan-net-np-finance-invoices-2026-07-08-14_45_40.png",
  support: "/oss-bss/screencapture-cms-kisan-net-np-tickets-2026-07-08-14_46_05.png",
  fieldTasks: "/oss-bss/screencapture-cms-kisan-net-np-tasks-2026-07-08-14_45_54.png",
  inventoryLifecycle: "/oss-bss/screencapture-cms-kisan-net-np-inventory-lifecycle-2026-07-08-14_45_07.png",
  campaigns: "/oss-bss/screencapture-cms-kisan-net-np-sms-campaign-2026-07-08-14_40_25.png",
  voice: "/oss-bss/screencapture-cms-kisan-net-np-yeaster-2026-07-08-14_46_16.png",
} as const;
