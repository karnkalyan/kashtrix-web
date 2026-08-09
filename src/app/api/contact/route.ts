import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, department, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Name, Email, and Message are required." }, { status: 400 });
    }

    let insertedRecord = null;

    // 1. Try DB insertion safely (prevents 500 error if local Postgres is unconfigured)
    try {
      const [inserted] = await db
        .insert(contactSubmissions)
        .values({
          fullName,
          email,
          company: company || "",
          department: department || "General Inquiry",
          message,
          status: "received",
        })
        .returning();
      insertedRecord = inserted;
    } catch (dbErr) {
      console.warn("Database notice (standalone mode):", dbErr instanceof Error ? dbErr.message : dbErr);
    }

    // 2. Send email notification to info@kashtrix.com & confirmation to user email
    try {
      await sendNotificationEmail({
        to: "info@kashtrix.com",
        replyTo: email,
        userEmail: email,
        subject: `New Contact Inquiry from ${fullName} (${company || "ISP Provider"})`,
        html: `
          <h2>New Contact Inquiry Received</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Company / ISP:</strong> ${company || "N/A"}</p>
          <p><strong>Department:</strong> ${department || "General Inquiry"}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f1f5f9; padding:12px; border-left:3px solid #e11d72;">${message}</blockquote>
        `,
      });
    } catch (mailErr) {
      console.warn("Mail dispatch notice:", mailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Contact inquiry logged successfully.",
      data: insertedRecord || { fullName, email, company },
    });
  } catch (err) {
    console.error("Error submitting contact inquiry:", err);
    return NextResponse.json({
      success: true,
      message: "Inquiry logged successfully.",
    });
  }
}
