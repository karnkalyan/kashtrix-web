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
  ossOverview: "/assets/030d7016-5b75-4531-ab1e-2bd488cf5ac0.png",
  nocMonitoring: "/assets/38de87f4-1fdf-4a22-aa0b-04140a2fedcf.png",
  fiberMap: "/assets/5fb0e71a-8322-4013-8e25-a01918528e3c.png",
  fiberNetworks: "/assets/62477c36-f04b-4465-ba1c-30f22b7fc4ec.png",
  oltManagement: "/assets/68c35006-c428-4b18-85b3-fc46dd973192.png",
  radiusControl: "/assets/6e5aaa99-344d-43af-aa72-ef3d75694b27.png",
  radiusDisconnect: "/assets/6ebf0249-bd4e-4c78-a3d1-b76566e7134c.png",
  tr069: "/assets/7462371b-8c50-433b-8eff-de70b01e3479.png",
  tr069Device: "/assets/859d1238-8d99-4b82-b965-1b0abf16cfd7.png",
  networkInventory: "/assets/b4b4f136-67f0-4120-b250-0370f1263691.png",
  bssOverview: "/assets/d89b78ec-1e5c-40b6-9a68-02575eea5f48.png",
  billing: "/assets/e0aa4b02-eb96-417c-8415-0a0baaab4c87.png",
  customerManagement: "/assets/f2fe4f31-8e23-4a09-ac1d-87594885a9c7.png",
  revenueManagement: "/assets/fd9043e3-1a2b-42c1-aaa6-92d9261ef786.png",
  support: "/assets/030d7016-5b75-4531-ab1e-2bd488cf5ac0.png",
  fieldTasks: "/assets/d89b78ec-1e5c-40b6-9a68-02575eea5f48.png",
  inventoryLifecycle: "/assets/e0aa4b02-eb96-417c-8415-0a0baaab4c87.png",
  campaigns: "/assets/f2fe4f31-8e23-4a09-ac1d-87594885a9c7.png",
  voice: "/assets/fd9043e3-1a2b-42c1-aaa6-92d9261ef786.png",
  aiAgents: "/assets/kirtinet-light-colla.png",
  asterisk: "/assets/fd9043e3-1a2b-42c1-aaa6-92d9261ef786.png",
} as const;
