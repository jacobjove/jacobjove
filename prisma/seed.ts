import sampleSize from "lodash/sampleSize";
import prisma from "../lib/prisma";
import actionsData from "./seeds/actions";
import identitiesData from "./seeds/identities";
import usersData from "./seeds/users";
import valuesData from "./seeds/values";

async function main() {
  const adminEmail = process.env.ADMIN_USER || `test@gmail.com`;
  const user = await prisma.user.findUnique({
    where: {
      email: adminEmail,
    },
  });
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
        prisma.userIdentity.create({
          data: {
            userId: user.id,
            identityId: identity.id,
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
    sampleSize(values, Math.floor(Math.random() * values.length)).forEach((value) => {
      try {
        prisma.userValue.create({
          data: {
            userId: user.id,
            valueId: value.id,
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
        },
      });
    } catch (e) {
      console.log(e);
    }
    actions.forEach(async (action) => {
      try {
        const userAction = await prisma.userAction.create({
          data: {
            userId: user.id,
            actionId: action.id,
          },
        });
        await prisma.userActionSchedule.create({
          data: {
            userActionId: userAction.id,
            frequency: "DAY",
            multiplier: 1,
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
    const userActions = await prisma.userAction.findMany({
      where: {
        userId: user.id,
      },
      include: {
        action: true,
      },
    });
    [...Array(2)].map(async (_, i) => {
      try {
        const routine = await prisma.routine.create({
          data: {
            userId: user.id,
            name: `Routine ${i}`,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        });
        let routineDurationInMinutes = 0;
        userActions.forEach(async (userAction, i) => {
          const doIt = true;
          if (doIt) {
            const actionDurationInMinutes = 10;
            try {
              await prisma.routineAction.create({
                data: {
                  routineId: routine.id,
                  actionId: userAction.action.id,
                  position: i,
                  durationInMinutes: actionDurationInMinutes,
                },
              });
              routineDurationInMinutes += actionDurationInMinutes;
            } catch (e) {
              console.log(e);
            }
          }
          await prisma.routine.update({
            where: {
              id: routine.id,
            },
            data: {
              durationInMinutes: routineDurationInMinutes,
            },
          });
        });
      } catch (e) {
        console.log(e);
      }
    });
    const calendar = await prisma.calendar.findFirst({
      where: {
        userId: user.id,
        name: `Default`,
      },
    });
    if (calendar) {
      userActions.forEach(async (userAction) => {
        try {
          await prisma.userActionSchedule.create({
            data: {
              userActionId: userAction.id,
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
            end.setTime(end.getTime() + 30 * 60 * 1000);
            if (i % 2 == 0) {
              await prisma.calendarEvent.create({
                data: {
                  calendarId: calendar.id,
                  start: start.toISOString(),
                  end: end.toISOString(),
                  title: `${userAction.action.name} event ${i}`,
                },
              });
            }
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
