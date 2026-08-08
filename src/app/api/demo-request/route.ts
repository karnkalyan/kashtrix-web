import { NextResponse } from "next/server";
import { db } from "@/db";
import { demoRequests } from "@/db/schema";
import { sendNotificationEmail } from "@/lib/mailer";

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

    // Send email notification to info@kashtrix.com & receipt to user work email
    await sendNotificationEmail({
      to: "info@kashtrix.com",
      replyTo: workEmail,
      userEmail: workEmail,
      subject: `New Sandbox Demo Request from ${fullName} (${companyName})`,
      html: `
        <h2>New Custom Demo Sandbox Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Work Email:</strong> ${workEmail}</p>
        <p><strong>Company / ISP:</strong> ${companyName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber || "N/A"}</p>
        <p><strong>Country:</strong> ${country || "Global"}</p>
        <p><strong>Provider Type:</strong> ${providerType || "ISP / Fiber"}</p>
        <p><strong>Subscriber Size:</strong> ${subscriberRange || "N/A"}</p>
        <p><strong>Interested Modules:</strong> ${Array.isArray(interestedModules) ? interestedModules.join(", ") : interestedModules}</p>
        <p><strong>Hardware / Message Notes:</strong></p>
        <blockquote style="background:#f1f5f9; padding:12px; border-left:3px solid #e11d72;">${message || "None provided"}</blockquote>
      `,
    });

    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error("Error submitting demo request:", err);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}
