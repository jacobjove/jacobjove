import { createTransport, Transporter } from "nodemailer";

if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
  throw new Error("SMTP_USER and SMTP_PASSWORD environment variables are required.");
}

let transporter: Transporter;

const options = {
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: true,
};

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._transporter) {
    global._transporter = createTransport(options);
  }
  transporter = global._transporter;
} else {
  // In production mode, it's best to not use a global variable.
  transporter = createTransport(options);
}

interface SendMailOptions {
  to: string;
  from: string;
  subject: string;
  text: string;
}

export const sendMail = ({ to, from, subject, text }: SendMailOptions) => {
  return transporter.sendMail({
    to,
    from,
    subject,
    text,
    html: `<div>${text}</div>`,
  });
};
