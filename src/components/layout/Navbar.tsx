"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { AnimatedLogo } from "@/components/visual/AnimatedLogo";
import { PlatformMegaMenu } from "./PlatformMegaMenu";
import { AutomationMegaMenu } from "./AutomationMegaMenu";
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";
import { AIAgentsMegaMenu } from "./AIAgentsMegaMenu";
import { ResourcesMegaMenu } from "./ResourcesMegaMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(menuName);
    }, 120);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  return (
    <header
      className={cn(
        "top-0 left-0 right-0 z-40 h-20 transition-all duration-300",
        pathname === "/" ? "fixed" : "sticky",
        isScrolled
          ? "bg-[#FFFFFF]/88 shadow-[0_10px_35px_rgba(43,13,58,0.07)] backdrop-blur-xl dark:bg-[#09050F]/88"
          : "bg-transparent shadow-none"
      )}
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Logo */}
        <Link href="/" aria-label="Kashtrix Home">
          <AnimatedLogo size="lg" className="!h-11 !w-[225px] max-[480px]:!w-[170px]" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-3 font-inter text-xs font-medium text-[#1B1024]"
          onMouseLeave={handleMouseLeave}
        >
          {/* Platform Mega Item */}
          <div className="py-2" onMouseEnter={() => handleMouseEnter("platform")}>
            <button
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors",
                activeMenu === "platform" || pathname.startsWith("/platform") || pathname.startsWith("/oss") || pathname.startsWith("/bss")
                  ? "text-[#2B0D3A] bg-[#F4EEFF]"
                  : "hover:text-[#4A1B7A] hover:bg-[#F8F7FA]"
              )}
            >
              <span>Platform</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeMenu === "platform" && "rotate-180 text-[#E11D72]")} />
            </button>
            {activeMenu === "platform" && <PlatformMegaMenu onClose={() => setActiveMenu(null)} />}
          </div>

          {/* Solutions Mega Item */}
          <div className="py-2" onMouseEnter={() => handleMouseEnter("solutions")}>
            <button
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors",
                activeMenu === "solutions" || pathname.startsWith("/industries")
                  ? "text-[#2B0D3A] bg-[#F4EEFF]"
                  : "hover:text-[#4A1B7A] hover:bg-[#F8F7FA]"
              )}
            >
              <span>Solutions</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeMenu === "solutions" && "rotate-180 text-[#E11D72]")} />
            </button>
            {activeMenu === "solutions" && <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />}
          </div>

          {/* AI Agents Mega Item */}
          <div className="py-2" onMouseEnter={() => handleMouseEnter("ai")}>
            <button
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors",
                activeMenu === "ai" || pathname.startsWith("/ai-agents")
                  ? "text-[#2B0D3A] bg-[#F4EEFF]"
                  : "hover:text-[#4A1B7A] hover:bg-[#F8F7FA]"
              )}
            >
              <span className="flex items-center gap-1.5">
                AI Agents <span className="w-1.5 h-1.5 rounded-full bg-[#E11D72]" />
              </span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeMenu === "ai" && "rotate-180 text-[#E11D72]")} />
            </button>
            {activeMenu === "ai" && <AIAgentsMegaMenu onClose={() => setActiveMenu(null)} />}
          </div>

          {/* Automation Mega Item */}
          <div className="py-2" onMouseEnter={() => handleMouseEnter("automation")}>
            <button
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors",
                activeMenu === "automation" || pathname.startsWith("/network-automation") || pathname.startsWith("/hardware-automation") || pathname.startsWith("/voice-automation")
                  ? "text-[#2B0D3A] bg-[#F4EEFF]"
                  : "hover:text-[#4A1B7A] hover:bg-[#F8F7FA]"
              )}
            >
              <span>Automation</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeMenu === "automation" && "rotate-180 text-[#E11D72]")} />
            </button>
            {activeMenu === "automation" && <AutomationMegaMenu onClose={() => setActiveMenu(null)} />}
          </div>

          {/* Resources Mega Item */}
          <div className="py-2" onMouseEnter={() => handleMouseEnter("resources")}>
            <button
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors",
                activeMenu === "resources" || pathname.startsWith("/resources") || pathname.startsWith("/documentation") || pathname.startsWith("/api-platform")
                  ? "text-[#2B0D3A] bg-[#F4EEFF]"
                  : "hover:text-[#4A1B7A] hover:bg-[#F8F7FA]"
              )}
            >
              <span>Resources</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", activeMenu === "resources" && "rotate-180 text-[#E11D72]")} />
            </button>
            {activeMenu === "resources" && <ResourcesMegaMenu onClose={() => setActiveMenu(null)} />}
          </div>

          {/* Pricing Link */}
          <Link
            href="/pricing"
            className={cn(
              "px-3 py-2 rounded-lg transition-colors",
              pathname === "/pricing" ? "text-[#2B0D3A] font-bold bg-[#F4EEFF]" : "hover:text-[#4A1B7A]"
            )}
          >
            Pricing
          </Link>
        </nav>

        {/* Right Side: Login & Request Demo */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl text-xs font-inter font-medium text-[#2B0D3A] hover:bg-[#F4EEFF] transition-all"
          >
            Login
          </Link>

          <button
            onClick={onRequestDemo}
            className="group px-4 py-2.5 rounded-xl bg-[#2B0D3A] text-white font-inter font-semibold text-xs hover:bg-[#4A1B7A] transition-all duration-300 flex items-center gap-2 shadow-md shadow-[#2B0D3A]/15"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onRequestDemo}
            className="px-3 py-1.5 rounded-lg bg-[#2B0D3A] text-white font-inter font-semibold text-xs shadow-2xs"
          >
            Demo
          </button>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-xl text-[#2B0D3A] hover:bg-[#E8DFF0] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onRequestDemo={onRequestDemo}
      />
    </header>
  );
};
