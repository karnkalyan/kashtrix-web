"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { GlobalNetworkGlobe } from "@/components/visual/GlobalNetworkGlobe";
import { Mail, Globe, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      department: "Technical Sales & Architecture",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("Failed to submit inquiry. Please try again or email support@kashtrix.com.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting inquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <div className="pt-16 pb-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EEFF] text-[#4A1B7A]">
              Connect With Our Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-sora text-[#2B0D3A] tracking-tight">
              Talk to Our Experts.
            </h1>
            <p className="text-sm sm:text-base text-[#6F6078]">
              Reach out to our global team of telecom solutions architects, NOC engineers, and executive advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Column 1: Contact Information */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#F8F7FA] border border-[#E8DFF0] space-y-4">
                <h3 className="text-base font-bold font-sora text-[#2B0D3A]">Direct Engineering Lines</h3>
                <div className="space-y-3 text-xs text-[#1B1024]">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#E11D72] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B0D3A]">Business &amp; Product Inquiries:</strong>
                      <a href="mailto:info@kashtrix.com">info@kashtrix.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#4A1B7A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B0D3A]">Global Presence:</strong>
                      <span>Dubai · Singapore · Dallas · Kathmandu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-[#4A1B7A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2B0D3A]">NOC Escalation Support:</strong>
                      <span>24/7/365 High-Availability Center</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Form */}
            <div className="lg:col-span-8 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8DFF0] shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#E11D72] mx-auto" />
                  <h3 className="text-2xl font-bold font-sora text-[#2B0D3A]">Inquiry Logged to Database!</h3>
                  <p className="text-sm text-[#6F6078] max-w-md mx-auto">
                    Thank you for reaching out. A Senior Telecom Solutions Architect will review your inquiry and respond to your email within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Full Name *</label>
                      <input
                        {...register("fullName")}
                        placeholder="Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                      />
                      {errors.fullName && <span className="text-[10px] text-[#E11D72] mt-1 block">{errors.fullName.message}</span>}
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Work Email *</label>
                      <input
                        {...register("email")}
                        placeholder="alex@telecomisp.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                      />
                      {errors.email && <span className="text-[10px] text-[#E11D72] mt-1 block">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Company / ISP Name</label>
                      <input
                        {...register("company")}
                        placeholder="Acme Fiber Networks"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#2B0D3A] block mb-1">Inquiry Department</label>
                      <select
                        {...register("department")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs font-semibold"
                      >
                        <option>Technical Sales &amp; Architecture</option>
                        <option>Partner &amp; Hardware Vendor Program</option>
                        <option>Billing &amp; Revenue Assurance Audit</option>
                        <option>NOC Escalation &amp; Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2B0D3A] block mb-1">How can our architects assist? *</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Please describe your active subscriber circuits, network vendor hardware, or current billing pain points..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFF0] bg-[#F8F7FA] text-xs focus:outline-none focus:border-[#4A1B7A]"
                    />
                    {errors.message && <span className="text-[10px] text-[#E11D72] mt-1 block">{errors.message.message}</span>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-7 py-3 rounded-xl bg-[#2B0D3A] text-white font-sora font-bold text-xs hover:bg-[#4A1B7A] transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {submitting ? <span>Sending to Database...</span> : <><Send className="w-3.5 h-3.5" /> Submit Custom Inquiry</>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Regional Globe Section */}
          <div className="mt-16 pt-16 border-t border-[#E8DFF0]">
            <h3 className="text-xl font-bold font-sora text-[#2B0D3A] text-center mb-8">
              Interactive Worldwide Support Footprint
            </h3>
            <GlobalNetworkGlobe />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
