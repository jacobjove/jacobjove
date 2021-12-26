import { PrismaClient } from "@prisma/client";

// Prevent multiple instances of Prisma Client in development
declare const global: NodeJS.Global & { prisma?: PrismaClient };

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
} else {
  console.log("WARNING: Not using global prisma <<<<<<<<<<<");
}

export default prisma;
