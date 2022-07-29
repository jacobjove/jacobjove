import { USE_FIREBASE } from "@/config";
import mongoClientPromise from "@/lib/mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { firestore } from "@/utils/firebase/admin";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";

export type ApolloContext = {
  session: Session | null | undefined;
} & (
  | {
      firestore: typeof firestore;
    }
  | {
      db: MongoClient;
    }
);

interface FromContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function createApolloContext({ req, res }: FromContext): Promise<ApolloContext> {
  const session = await unstable_getServerSession(req, res, authOptions);
  return {
    session,
    ...(USE_FIREBASE ? { firestore } : { db: await mongoClientPromise }),
  };
}
