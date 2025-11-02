import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, html }) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error("Missing Gmail credentials in environment variables.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html
    });

   
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
