import { sendMail } from "@utils/email";
import { NextApiRequest, NextApiResponse } from "next";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;

  // Returns early if required fields are missing.
  if (!body.email || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Email address and message are required." });
  }

  // Send an email containing the message body to the admin's email address.
  await sendMail({
    to: process.env.ADMIN_EMAIL as string,
    from: body.email,
    subject: `Message from ${body.name ?? body.email}`,
    text: body.message,
  }).catch((error) => {
    console.error(error);
    return res.status(500).json({ data: "Something went wrong." });
  });

  // Send an HTTP success code.
  res.status(200).json({ ok: true });
};

export default contact;
