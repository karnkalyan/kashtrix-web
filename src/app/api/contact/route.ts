import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, department, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Name, Email, and Message are required." }, { status: 400 });
    }

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

    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error("Error submitting contact inquiry:", err);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
