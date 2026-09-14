import { NextResponse } from "next/server";
import { Resend } from "resend";

interface InquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  country?: string;
  productInterest?: string;
  requiredQuantity?: string;
  message: string;
  source?: string;
}

export async function POST(req: Request) {
  try {
    let body: InquiryPayload;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload in request." },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      companyName,
      country,
      productInterest,
      requiredQuantity,
      message,
      source = "Website Contact Form",
    } = body;

    // Validation
    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }
    if (!email || !email.trim() || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Project requirements / message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = (process.env.CONTACT_RECEIVER_EMAIL || "lavishstone24@gmail.com").trim().toLowerCase();
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Lavish Stone <onboarding@resend.dev>";

    // If API key is not configured or still placeholder, log instructions and return simulated success for testing
    if (!apiKey || apiKey === "re_your_api_key_here" || apiKey.trim() === "") {
      console.warn(
        "⚠️ [Resend API] RESEND_API_KEY is not configured in .env.local! " +
          `Inquiry from ${fullName} (${email}) was received locally, but email could not be sent to ${receiverEmail}. ` +
          "Please set your real key from https://resend.com/api-keys in .env.local."
      );

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Enquiry received. (Resend API key not yet set in .env.local)",
      });
    }

    const resend = new Resend(apiKey);

    const subject = `[New Stone Enquiry] ${
      productInterest ? `${productInterest} - ` : ""
    }${fullName} (${companyName || country || "Inquiry"})`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry - Lavish Stone</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0f11; color: #e5e7eb;">
  <div style="max-width: 620px; margin: 24px auto; background-color: #16181b; border: 1px solid #2f343a; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Brand Header -->
    <div style="background: linear-gradient(135deg, #1c1f24 0%, #121417 100%); padding: 32px 28px; border-bottom: 1px solid #d4af37; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #d4af37;">LAVISH STONE</h1>
      <p style="margin: 6px 0 0; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #9ca3af;">New Customer Inquiry Notification</p>
    </div>

    <!-- Main Content -->
    <div style="padding: 28px;">
      <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid #d4af37; padding: 12px 16px; border-radius: 4px; margin-bottom: 24px;">
        <span style="font-size: 13px; color: #e5e7eb;">Source: <strong>${source}</strong></span>
      </div>

      <h2 style="font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #d4af37; margin: 0 0 16px; border-bottom: 1px solid #282c31; padding-bottom: 8px;">
        Client Information
      </h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #9ca3af; width: 38%;">Full Name:</td>
          <td style="padding: 8px 0; color: #ffffff; font-weight: 500;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9ca3af;">Email Address:</td>
          <td style="padding: 8px 0; color: #d4af37;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none; font-weight: 500;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9ca3af;">Phone / Mobile:</td>
          <td style="padding: 8px 0; color: #ffffff;">${phone || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9ca3af;">Company / Firm:</td>
          <td style="padding: 8px 0; color: #ffffff;">${companyName || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9ca3af;">Country / City:</td>
          <td style="padding: 8px 0; color: #ffffff;">${country || "Not specified"}</td>
        </tr>
      </table>

      <h2 style="font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #d4af37; margin: 0 0 16px; border-bottom: 1px solid #282c31; padding-bottom: 8px;">
        Project Specifications
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #9ca3af; width: 38%;">Product Interest:</td>
          <td style="padding: 8px 0; color: #ffffff; font-weight: 500;">${productInterest || "General Inquiry / Catalog"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9ca3af;">Required Quantity:</td>
          <td style="padding: 8px 0; color: #ffffff;">${requiredQuantity || "To be discussed"}</td>
        </tr>
      </table>

      <h2 style="font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #d4af37; margin: 0 0 12px; border-bottom: 1px solid #282c31; padding-bottom: 8px;">
        Requirements & Message
      </h2>

      <div style="background-color: #0f1012; border: 1px solid #26292e; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #d1d5db; white-space: pre-wrap; margin-bottom: 28px;">${message}</div>

      <!-- Quick Action CTA -->
      <div style="text-align: center; padding-top: 8px; border-top: 1px solid #26292e;">
        <a href="mailto:${email}?subject=RE: Lavish Stone Inquiry - ${encodeURIComponent(productInterest || "Project Requirements")}" 
           style="display: inline-block; background-color: #d4af37; color: #000000; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin: 6px;">
          Reply to Customer
        </a>
        ${
          phone
            ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" 
                style="display: inline-block; background-color: #25D366; color: #ffffff; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin: 6px;">
                Message on WhatsApp
              </a>`
            : ""
        }
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #0d0f11; padding: 18px 24px; border-top: 1px solid #26292e; text-align: center; font-size: 11px; color: #6b7280;">
      This email was automatically generated by the Lavish Stone website enquiry system and dispatched via Resend.
    </div>
  </div>
</body>
</html>
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: email,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error("[Resend API Error]:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry email successfully dispatched to desk.",
      data,
    });
  } catch (err: any) {
    console.error("[Inquiry API Exception]:", err);
    return NextResponse.json(
      { success: false, error: err.message || "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
