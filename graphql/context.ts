import mongoosePromise from "@/lib/mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";

export interface GqlContext {
  session: Session | null | undefined;
  db: unknown;
}

interface FromContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function createGqlContext({ req, res }: FromContext): Promise<GqlContext> {
  const session = await unstable_getServerSession(req, res, authOptions);
  const mongoClient = await mongoosePromise.catch((err) => {
    console.error();
    console.error(">>> ERROR:");
    console.error(err);
    console.error("^^^^^");
  });
  return {
    session,
    db: mongoClient,
  };
}
