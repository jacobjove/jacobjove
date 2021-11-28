import sampleSize from "lodash/sampleSize";
import prisma from "../lib/prisma";
import identitiesData from "./seeds/identities";
import usersData from "./seeds/users";

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
    },
  });

  await prisma.user.createMany({
    data: usersData,
  });

  const users = await prisma.user.findMany();

  await prisma.identity.createMany({
    data: identitiesData,
  });

  const identities = await prisma.identity.findMany();

  users.forEach((user) => {
    sampleSize(identities, Math.floor(Math.random() * identities.length)).forEach((identity) => {
      prisma.identification.create({
        data: {
          userId: user.id,
          identityId: identity.id,
        },
      });
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
