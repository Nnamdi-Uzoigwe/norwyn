import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const { fullName, email, phone, country, fraudType, amountLost, description } = body

    // Basic validation
    if (!fullName || !email || !fraudType || !amountLost || !description) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "Norwyn Solution <onboarding@resend.dev>", // 👈 replace with your verified domain later e.g. no-reply@norwyn.com
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Case Submission — ${fraudType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0a1628;">
          <div style="background: #0a1628; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #b8960c; font-size: 20px; margin: 0;">Norwyn Solution</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0;">New Confidential Case Submission</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e8e0cc; border-top: none; border-radius: 0 0 12px 12px;">

            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; width: 40%; vertical-align: top;">Full Name</td>
                <td style="padding: 10px 0; color: #0a1628; font-weight: 600;">${fullName}</td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #0a1628; font-weight: 600;">${email}</td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #0a1628; font-weight: 600;">${phone || "—"}</td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Country</td>
                <td style="padding: 10px 0; color: #0a1628; font-weight: 600;">${country || "—"}</td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Fraud Type</td>
                <td style="padding: 10px 0;">
                  <span style="background: #fef9ec; color: #b8960c; border: 1px solid #e8d88a; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    ${fraudType}
                  </span>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Amount Lost</td>
                <td style="padding: 10px 0;">
                  <span style="background: #fef2f2; color: #ef4444; border: 1px solid #fecaca; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    ${amountLost}
                  </span>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f0ece0;">
                <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Description</td>
                <td style="padding: 10px 0; color: #0a1628; line-height: 1.6;">${description}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f8f6f0; border-radius: 8px; border: 1px solid #e8e0cc;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                This submission is confidential. Reply directly to this email to respond to the client.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}