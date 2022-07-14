import { AuthToken } from "@/components/contexts/AuthContext";
import { USE_FIREBASE } from "@/config";
import { getAuth } from "@/utils/auth/ssr";
import { firestore } from "@/utils/firebase/admin";
import prisma from "@/utils/prisma";
import { PrismaClient } from "@prisma/client";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { NextApiRequest, NextApiResponse } from "next";

export type ApolloContext = {
  token: AuthToken | DecodedIdToken | null | undefined;
} & (
  | {
      prisma: PrismaClient;
    }
  | {
      firestore: typeof firestore;
    }
);

interface FromContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function createApolloContext(context: FromContext): Promise<ApolloContext> {
  // console.log(">>> createApolloContext");
  // console.log(">>> Calling getAuth...");
  const { token } = await getAuth(context);
  // console.log(">>> Returned to createApolloContext from getAuth");
  // console.error(">>> createApolloContext token:", token);
  return {
    token,
    ...(USE_FIREBASE ? { firestore } : { prisma }),
  };
}
