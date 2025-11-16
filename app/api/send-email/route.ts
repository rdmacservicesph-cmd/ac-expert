import { CustomerConfirmation } from "@/app/emails/CustomerConfirmation";
import { InquiryNotification } from "@/app/emails/InquiryNotification";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      companyName,
      jobTitle,
      phoneNumber,
      region,
      message,
    } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !companyName ||
      !jobTitle ||
      !phoneNumber ||
      !region ||
      !message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get base URL for assets (logo, etc.)
    // Use production URL for logo to ensure it works in emails
    const logoUrl = "https://ac-expert.vercel.app/aircon-experts.svg";
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://ac-expert.vercel.app");

    // Dynamically import ReactDOMServer to avoid Next.js warning
    const ReactDOMServer = (await import("react-dom/server")).default;

    // Render email templates
    const notificationEmailHtml = ReactDOMServer.renderToStaticMarkup(
      InquiryNotification({
        firstName,
        lastName,
        email,
        companyName,
        jobTitle,
        phoneNumber,
        region,
        message,
        baseUrl,
        logoUrl,
      })
    );

    const confirmationEmailHtml = ReactDOMServer.renderToStaticMarkup(
      CustomerConfirmation({
        firstName,
        lastName,
        baseUrl,
        logoUrl,
      })
    );

    // Send notification email to admin
    const adminEmail =
      process.env.ADMIN_EMAIL || "rdm.ac.services.ph@gmail.com";
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "onboarding@resend.dev", // You should update this to your verified domain
      to: adminEmail,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: notificationEmailHtml,
    });

    if (adminError) {
      console.error("Resend error (admin email):", adminError);
      return NextResponse.json(
        { error: "Failed to send notification email", details: adminError },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { data: customerData, error: customerError } =
      await resend.emails.send({
        from: "onboarding@resend.dev", // You should update this to your verified domain
        to: email,
        subject: "Thank You for Contacting Aircon Experts",
        html: confirmationEmailHtml,
      });

    if (customerError) {
      console.error("Resend error (customer email):", customerError);
      // Admin email was sent successfully, but customer email failed
      // We'll still return success but log the error
      console.warn(
        "Customer confirmation email failed, but admin notification was sent"
      );
    }

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        adminEmail: adminData,
        customerEmail: customerData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
