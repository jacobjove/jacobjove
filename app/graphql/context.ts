import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
import { User } from 'next-auth';
import { getSession } from "next-auth/react";

export type Context = {
  user: User | null;
  accessToken: string;
  prisma: PrismaClient;
};

export async function createContext(context): Promise<Context> {
  const session = await getSession({ req: context.req });
  const user = session?.user || null;
  const accessToken = session?.accessToken || "";
  return {
    user,
    accessToken,
    prisma,
  };
}