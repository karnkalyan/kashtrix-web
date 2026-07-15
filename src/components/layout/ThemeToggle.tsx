"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  if (!mounted) return <span className="block h-9 w-9" aria-hidden="true" />;
  const dark = resolvedTheme === "dark";
  return <button type="button" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} className="grid h-9 w-9 place-items-center rounded-xl border border-[#E8DFF0] bg-white text-[#2B0D3A] transition hover:bg-[#F4EEFF] dark:border-[#342044] dark:bg-[#1A0D24] dark:text-white dark:hover:bg-[#2B0D3A]">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>;
}
