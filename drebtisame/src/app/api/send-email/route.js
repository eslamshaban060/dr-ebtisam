import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eslamshaban060@gmail.com",
      pass: "Eslam@892002",
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });

    return new Response(JSON.stringify({ message: "Email sent!" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Error sending email:", err); // ← هتطبع السبب الحقيقي في الكونسول
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
