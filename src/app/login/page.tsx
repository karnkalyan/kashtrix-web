"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { AnimatedLogo } from "@/components/visual/AnimatedLogo";
import { Lock, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);
  const [code, setCode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!twoFactor) {
      setTwoFactor(true);
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <SiteShell>
      <div className="pt-16 pb-24 bg-[#FFFFFF] min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8DFF0] shadow-2xl space-y-6 text-[#1B1024]">
          <div className="text-center space-y-3">
            <Link href="/" className="inline-block mx-auto">
              <AnimatedLogo size="md" />
            </Link>
            <h2 className="text-xl font-bold font-sora text-[#2B0D3A]">
              Enterprise Platform Portal
            </h2>
            <p className="text-xs text-[#6F6078]">
              Sign in to manage your unified OSS/BSS core and NOC telemetry.
            </p>
          </div>

          {loggedIn ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#E11D72] mx-auto animate-bounce" />
              <h3 className="text-lg font-bold font-sora text-[#2B0D3A]">
                Authentication Verified (Zero-Trust Session Active)
              </h3>
              <p className="text-xs text-[#6F6078] leading-relaxed">
                Redirecting you to ASR-9000-Core-01 NOC Dashboard...
              </p>
              <Link
                href="/network-management"
                className="block w-full py-3 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs text-center hover:bg-[#4A1B7A] transition-colors"
              >
                Go to NOC Operations Center
              </Link>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              {!twoFactor ? (
                <>
                  <div>
                    <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@telecomprovider.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Password / Hardware Key</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                    />
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#F4EEFF] text-[#4A1B7A] text-xs flex items-center gap-2">
                    <Lock className="w-4 h-4 shrink-0" /> Enter 6-digit SOC 2 Zero-Trust Hardware Token code
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Authenticator Code</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="849 201"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-center text-lg font-inter tracking-[0.2em] font-semibold focus:outline-none focus:border-[#4A1B7A]"
                    />
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs hover:bg-[#4A1B7A] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{!twoFactor ? "Continue with Multi-Factor Auth" : "Verify Token & Sign In"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          <div className="pt-4 border-t border-[#E8DFF0] flex items-center justify-between text-[11px] text-[#6F6078]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A1B7A]" /> Mutual TLS Enabled
            </span>
            <Link href="/contact" className="hover:text-[#2B0D3A]">
              Forgot Hardware Key?
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
