import { getDb } from "@utils/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session?.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const data = req.body;

  // Returns early if required fields are missing.
  if (!data._id || !data.title || !data.body) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Title and body are required." });
  }

  const db = await getDb();
  const { _id, ...rest } = data;
  const result = await db.collection("posts").updateOne(
    { _id },
    {
      ...rest,
      updatedAt: new Date(),
    }
  );

  if (!result.modifiedCount) {
    return res.status(500).json({ error: "Unable to update post." });
  }

  // Send an HTTP success code.
  res.status(200).json({ ok: true });
};

export default post;
