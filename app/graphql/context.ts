import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
import { User } from 'next-auth';
import { getSession } from "next-auth/react";

export type Context = {
  user: User;
  accessToken: string;
  prisma: PrismaClient;
};

export async function createContext(context): Promise<Context> {
  const { user, accessToken } = await getSession({req: context.req});
  return {
    user,
    accessToken,
    prisma,
  };
}