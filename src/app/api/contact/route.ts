import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

const CONTACT_TO =
  process.env.CONTACT_EMAIL?.trim() || profile.email || "ammar12mustufa@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot — bots fill this, humans don't
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || "";
    const projectType = body.projectType?.trim() || "";
    const budget = body.budget?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message || !projectType) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const subject = `Portfolio enquiry from ${name}${projectType ? ` — ${projectType}` : ""}`;

    // Prefer Resend when configured; otherwise FormSubmit → Gmail
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.RESEND_FROM ||
            "Portfolio Contact <onboarding@resend.dev>",
          to: [CONTACT_TO],
          reply_to: email,
          subject,
          text: formatText({
            name,
            email,
            company,
            projectType,
            budget,
            message,
          }),
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json(
          { ok: false, error: "Could not send email. Please try again." },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    }

    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company: company || "—",
          projectType,
          budget: budget || "—",
          message,
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      },
    );

    if (!formSubmitRes.ok) {
      const err = await formSubmitRes.text();
      console.error("FormSubmit error:", err);
      return NextResponse.json(
        { ok: false, error: "Could not send email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function formatText(data: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  return [
    "New portfolio contact form submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "—"}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget || "—"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}
