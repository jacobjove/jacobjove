import { USE_FIREBASE } from "../config";
// import { database } from "@/utils/firebase";
import { firestore } from "../utils/firebase/admin";
import prisma from "../utils/prisma";
import usersData, { userId } from "../_/prisma/seeds/users";

async function main() {
  const adminEmail = process.env.ADMIN_USER || `test@gmail.com`;

  const usersCollection = USE_FIREBASE ? firestore.collection("users") : undefined;

  // Delete extant data.
  if (usersCollection) {
    await usersCollection.listDocuments().then((documents) => {
      documents.map(async (document) => {
        await document.listCollections().then((collections) => {
          for (const collection of collections) {
            collection.listDocuments().then((_documents) => {
              _documents.map((_document) => {
                _document.delete();
              });
            });
          }
        });
        document.delete();
      });
    });
  } else {
    await prisma.$transaction([
      prisma.metricApplication.deleteMany(),
      prisma.mantra.deleteMany(),
      prisma.mantra.deleteMany(),
      prisma.task.deleteMany(),
      prisma.routineHabit.deleteMany(),
      prisma.routine.deleteMany(),
      prisma.actionSchedule.deleteMany(),
      prisma.habit.deleteMany(),
      prisma.action.deleteMany(),
      prisma.note.deleteMany(),
      prisma.notebook.deleteMany(),
      prisma.account.deleteMany(),
      prisma.act.deleteMany(),
      prisma.identity.deleteMany(),
      prisma.value.deleteMany(),
      prisma.metric.deleteMany(),
      prisma.user.deleteMany(),
    ]);
  }

  // Create the admin user.
  const adminData = {
    id: userId,
    email: adminEmail,
    isAdmin: true,
  };
  const user = USE_FIREBASE
    ? await usersCollection?.add(adminData)
    : await prisma.user.create({ data: adminData });
  if (!user) throw new Error("Failed to create admin user");

  // Create additional users.
  USE_FIREBASE
    ? await Promise.all(usersData.map((obj) => usersCollection?.add(obj)))
    : await prisma.user.createMany({ data: usersData });

  // for (const taskData of tasksData) {
  //   const { subtasks, ...rest } = taskData;
  //   const data = rest as typeof rest & { userId: string };
  //   data.userId = user.id;
  //   const parentTask = await prisma.task.create({ data });
  //   if (subtasks) {
  //     for (const subtask of subtasks) {
  //       const data = subtask as typeof subtask & { userId: string; parentId: string };
  //       data.userId = user.id;
  //       data.parentId = parentTask.id;
  //       await prisma.task.create({ data });
  //     }
  //   }
  // }
  // // const tasks = await prisma.task.findMany();

  // await prisma.identity.createMany({
  //   data: identitiesData,
  // });
  // const identities = await prisma.identity.findMany();

  // await prisma.mantra.createMany({
  //   data: mantrasData,
  // });
  // const mantras = await prisma.mantra.findMany();

  // await prisma.value.createMany({
  //   data: valuesData,
  // });
  // const values = await prisma.value.findMany();

  // for (const actData of actsData) {
  //   const { variants: _variants, ...data } = actData;
  //   const variants = _variants || [];
  //   const parentAct = await prisma.act.create({ data });
  //   for (const variantData of variants) {
  //     const data = variantData as typeof variantData & { parentId?: string };
  //     data.parentId = parentAct.id;
  //     await prisma.act.create({ data });
  //   }
  // }

  // const acts = await prisma.act.findMany();

  // await prisma.metric.createMany({
  //   data: metricsData,
  // });
  // const metrics = await prisma.metric.findMany();
  // console.log("Created metrics:", metrics.map((m) => m.name));

  // acts.forEach((act) => {
  //   prisma.metricApplication.create({
  //     data: {
  //       actId: act.id,
  //       metricId: metrics[0].id,
  //     },
  //   }).then(() => {
  //     console.log(`Applied metric ${metrics[0].name} to act ${act.name}`);
  //   });
  // });

  // users.forEach(async (user) => {
  //   sampleSize(mantras, Math.floor(Math.random() * mantras.length)).forEach((mantra) => {
  //     try {
  //       prisma.mantra.create({
  //         data: {
  //           userId: user.id,
  //           mantraId: mantra.id,
  //         },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  //   sampleSize(identities, Math.floor(Math.random() * identities.length)).forEach((identity) => {
  //     try {
  //       prisma.identity.create({
  //         data: {
  //           userId: user.id,
  //           identityId: identity.id,
  //         },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  //   sampleSize(values, Math.floor(Math.random() * values.length)).forEach((value) => {
  //     prisma.value.create({
  //       data: {
  //         userId: user.id,
  //         valueId: value.id,
  //       },
  //     });
  //   });
  //   await prisma.calendar.create({
  //     data: {
  //       userId: user.id,
  //       name: `Default`,
  //     },
  //   });
  //   acts.forEach(async (act) => {
  //     prisma.habit.create({
  //       data: {
  //         userId: user.id,
  //         actId: act.id,
  //         name: act.name,
  //       },
  //     }).then(async (habit) => {
  //       console.log(`Created habit ${habit.id} for ${act.name}`);
  //       const metricApplications = await prisma.metricApplication.findMany({
  //         where: {
  //           actId: act.id,
  //         },
  //         include: {
  //           metric: true,
  //         },
  //       });
  //       metricApplications.forEach(async (metricApplication) => {
  //         await prisma.metricUsage.create({
  //           data: {
  //             metricId: metricApplication.metric.id,
  //             habitId: habit.id,
  //           },
  //         }).then(() => {
  //           console.log(`Applied ${metricApplication.metric.name} to ${habit.name}`);
  //         });
  //       });
  //       prisma.actionSchedule.create({
  //         data: {
  //           habitId: habit.id,
  //           frequency: "DAY",
  //           multiplier: 1,
  //         },
  //       });
  //     });
  //   });
  //   const habits = await prisma.habit.findMany({
  //     where: {
  //       userId: user.id,
  //     },
  //     include: {
  //       act: true,
  //     },
  //   });
  //   habits.forEach(async (habit) => {
  //     console.log(`Creating tasks for habit ${habit.id} ...`);
  //     await prisma.task.create({
  //       data: {
  //         userId: user.id,
  //         habitId: habit.id,
  //         title: habit.name,
  //       },
  //     });
  //   });
  //   [...Array(2)].map(async (_, i) => {
  //     try {
  //       const routine = await prisma.routine.create({
  //         data: {
  //           userId: user.id,
  //           name: `Routine ${i}`,
  //           notes:
  //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //         },
  //       });
  //       let routineDurationInMinutes = 0;
  //       habits.forEach(async (habit, i) => {
  //         const doIt = true;
  //         if (doIt) {
  //           const actionDurationInMinutes = 10;
  //           try {
  //             await prisma.routineHabit.create({
  //               data: {
  //                 routineId: routine.id,
  //                 habitId: habit.id,
  //                 position: i,
  //                 durationInMinutes: actionDurationInMinutes,
  //               },
  //             });
  //             routineDurationInMinutes += actionDurationInMinutes;
  //           } catch (e) {
  //             console.log(e);
  //           }
  //         }
  //         await prisma.routine.update({
  //           where: {
  //             id: routine.id,
  //           },
  //           data: {
  //             durationInMinutes: routineDurationInMinutes,
  //           },
  //         });
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  //   const calendar = await prisma.calendar.findFirst({
  //     where: {
  //       userId: user.id,
  //       name: `Default`,
  //     },
  //   });
  //   if (calendar) {
  //     habits.forEach(async (habit) => {
  //       try {
  //         await prisma.actionSchedule.create({
  //           data: {
  //             habitId: habit.id,
  //             frequency: "DAY",
  //             multiplier: 1,
  //           },
  //         });
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       const today = new Date();
  //       for (let i = 0; i < 30; i++) {
  //         try {
  //           const start = new Date(today);
  //           start.setDate(start.getDate() + i);
  //           const end = new Date(start);
  //           end.setTime(end.getTime() + 30 * 60 * 1000);
  //           if (i % 2 == 0) {
  //             await prisma.calendarEvent.create({
  //               data: {
  //                 calendarId: calendar.id,
  //                 start: start,
  //                 end: end,
  //                 title: `${habit.name} event ${i}`,
  //               },
  //             });
  //           }
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       }
  //     });
  //   }
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
