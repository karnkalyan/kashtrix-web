import { NextResponse } from "next/server";
import { db } from "@/db";
import { demoRequests } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      companyName,
      phoneNumber,
      country,
      providerType,
      subscriberRange,
      interestedModules,
      message,
    } = body;

    if (!fullName || !workEmail || !companyName) {
      return NextResponse.json({ error: "Name, Work Email, and Company Name are required." }, { status: 400 });
    }

    const [inserted] = await db
      .insert(demoRequests)
      .values({
        fullName,
        workEmail,
        companyName,
        phoneNumber: phoneNumber || "",
        country: country || "Global",
        providerType: providerType || "ISP / Fiber",
        subscriberRange: subscriberRange || "10,000 - 50,000",
        interestedModules: Array.isArray(interestedModules) ? interestedModules.join(", ") : interestedModules || "Unified OSS/BSS",
        message: message || "",
      })
      .returning();

    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error("Error submitting demo request:", err);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}
