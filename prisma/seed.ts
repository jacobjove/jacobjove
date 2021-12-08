import sampleSize from "lodash/sampleSize";
import prisma from "../lib/prisma";
import actionsData from "./seeds/actions";
import identitiesData from "./seeds/identities";
import usersData from "./seeds/users";
import valuesData from "./seeds/values";

async function main() {
  const adminEmail = process.env.ADMIN_USER || `test@gmail.com`
  const user = await prisma.user.findUnique({
    where: {
      email: adminEmail
    }
  })
  if (!user) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        isAdmin: true,
      },
    });
  }

  let users = await prisma.user.findMany();
  try {
    await prisma.user.createMany({
      data: usersData,
    });
    users = await prisma.user.findMany();
  } catch (e) {
    console.log(e);
  }

  let identities = await prisma.identity.findMany();
  try {
    await prisma.identity.createMany({
      data: identitiesData,
    });
    identities = await prisma.identity.findMany();
  } catch (e) {
    console.log(e);
  }

  let values = await prisma.value.findMany();
  try {
    await prisma.value.createMany({
      data: valuesData,
    });
    values = await prisma.value.findMany();
  } catch (e) {
    console.log(e);
  }

  let actions = await prisma.action.findMany();
  try {
    await prisma.action.createMany({
      data: actionsData,
    });
    actions = await prisma.action.findMany();
  } catch (e) {
    console.log(e);
  }

  users.forEach(async (user) => {
    sampleSize(identities, Math.floor(Math.random() * identities.length)).forEach((identity) => {
      try {
        prisma.identitySelection.create({
          data: {
            userId: user.id,
            identityId: identity.id,
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
    try {
      await prisma.calendar.create({
        data: {
          userId: user.id,
          name: `Default`,
        }
      });
    } catch (e) {
      console.log(e);
    }
    const calendar = await prisma.calendar.findFirst({
      where: {
        userId: user.id,
        name: `Default`,
      }
    });
    if (calendar) {
      actions.forEach(async (action) => {
        try {
          await prisma.schedule.create({
            data: {
              userId: user.id,
              actionId: action.id,
              chron: "0 7 * * *",
              frequency: "DAY",
              multiplier: 1,
            },
          });
        } catch (e) {
          console.log(e);
        }
        const today = new Date();
        for (let i = 0; i < 30; i++) {
          try {
            const start = new Date(today);
            start.setDate(start.getDate() + i);
            const end = new Date(start);
            end.setTime(end.getTime() + 60 * 60 * 1000);
            // await prisma.calendarEvent.create({
            //   data: {
            //     calendarId: calendar.id,
            //     start: start.toISOString(),
            //     end: end.toISOString(),
            //     title: `${action.name} event ${i}`,
            //   },
            // });
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
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
