import { USE_FIREBASE } from "@/config";

let Prisma, PrismaClient;

(async () => {
  if (!USE_FIREBASE) {
    await import("@prisma/client").then((module) => {
      Prisma = module.Prisma;
      PrismaClient = module.PrismaClient;
    });
  }
})();

export { Prisma, PrismaClient };
