"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (_, { name, email, subject, message }) => {
  console.log("SMTP_USER:", process.env.SMTP_USER);
  console.log("SMTP_PASS:", process.env.SMTP_PASS ? "*****" : "MISSING");
  console.log("CONTACT_RECEIVER:", process.env.CONTACT_RECEIVER);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER!,
    to: process.env.CONTACT_RECEIVER!,
    subject: `[Portfolio Contact] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return { messageId: info.messageId };
  } catch (err) {
    console.error("❌ sendEmail error:", err);
    throw new Error("Email sending failed: " + (err as Error).message);
  }
},
});
