import mongoosePromise from "@web/lib/mongodb";
import { authOptions } from "@web/pages/api/auth/[...nextauth]";
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
  const mongoClient = await mongoosePromise;
  return {
    session,
    db: mongoClient,
  };
}
