import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "next-auth";
import { getSession } from "next-auth/react";

export type Context = {
  user: User | null;
  accessToken: string;
  prisma: PrismaClient;
};

interface FromContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function createContext(context: FromContext): Promise<Context> {
  const session = await getSession({ req: context.req });
  const user = session?.user || null;
  const accessToken = session?.accessToken || "";
  return {
    user,
    accessToken,
    prisma,
  };
}
