import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eslamshaban060@gmail.com",
      pass: "uhdi fipg gcvx jkbo",
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: message,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    throw new Error({ error: err.message });
  }
}
