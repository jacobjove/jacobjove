/* eslint-disable import/order */
// organize-imports-ignore
// NOTE: reflect-metadata must be imported at the top!
import "reflect-metadata";

import * as dotenv from "dotenv";
dotenv.config();

import mongoosePromise from "@/lib/mongodb";
import usersData from "@/graphql/seeds/users";
import UserModel from "@/graphql/generated/models/user.model";
import tasksData from "@/graphql/seeds/tasks";
import TaskModel from "@/graphql/generated/models/task.model";
import CalendarEventModel from "@/graphql/generated/models/calendarEvent.model";
import CalendarModel from "@/graphql/generated/models/calendar.model";

async function main() {
  await mongoosePromise;

  // Delete extant data.
  await UserModel.deleteMany({});
  await CalendarEventModel.deleteMany({});
  await TaskModel.deleteMany({});

  UserModel.insertMany(usersData);
  const adminEmail = process.env.ADMIN_USER || `test@gmail.com`;
  // Create the admin user.
  const adminData = {
    email: adminEmail,
    isAdmin: true,
  };
  let user = await UserModel.create(adminData);
  if (!user) throw new Error("Failed to create admin user");

  const tasks = await Promise.all(
    tasksData.map(async (_) => {
      const { subtasks, ...taskData } = _;
      const task = await TaskModel.create({
        ...taskData,
        userId: user._id,
      });
      subtasks?.forEach(async (_) => {
        await TaskModel.create({
          ..._,
          parentId: task._id,
          userId: user._id,
        });
      });
      return task;
    })
  );

  const calendar = await CalendarModel.findOne({ userId: user._id });
  if (!calendar?._id) throw new Error("Failed to find calendar");

  const calendarEvents = await Promise.all([
    CalendarEventModel.create({
      userId: user._id,
      calendarId: calendar._id,
      title: "Test Event",
      start: new Date(),
    }),
  ]);

  user = (await UserModel.findOneAndUpdate(
    { email: adminEmail },
    {
      tasks,
      calendarEvents,
    },
    { returnDocument: "after" }
  )) as typeof user;

  console.error(calendarEvents);

  // for (const taskData of tasksData) {
  //   const { subtasks, ...rest } = taskData;
  //   const data = rest as typeof rest & { userId: string };
  //   data.userId = user._id;
  //   const parentTask = await prisma.task.create({ data });
  //   if (subtasks) {
  //     for (const subtask of subtasks) {
  //       const data = subtask as typeof subtask & { userId: string; parentId: string };
  //       data.userId = user._id;
  //       data.parentId = parentTask._id;
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
  //     data.parentId = parentAct._id;
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
  //       actId: act._id,
  //       metricId: metrics[0]._id,
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
  //           userId: user._id,
  //           mantraId: mantra._id,
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
  //           userId: user._id,
  //           identityId: identity._id,
  //         },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  //   sampleSize(values, Math.floor(Math.random() * values.length)).forEach((value) => {
  //     prisma.value.create({
  //       data: {
  //         userId: user._id,
  //         valueId: value._id,
  //       },
  //     });
  //   });
  //   await prisma.calendar.create({
  //     data: {
  //       userId: user._id,
  //       name: `Default`,
  //     },
  //   });
  //   acts.forEach(async (act) => {
  //     prisma.habit.create({
  //       data: {
  //         userId: user._id,
  //         actId: act._id,
  //         name: act.name,
  //       },
  //     }).then(async (habit) => {
  //       console.log(`Created habit ${habit._id} for ${act.name}`);
  //       const metricApplications = await prisma.metricApplication.findMany({
  //         where: {
  //           actId: act._id,
  //         },
  //         include: {
  //           metric: true,
  //         },
  //       });
  //       metricApplications.forEach(async (metricApplication) => {
  //         await prisma.metricUsage.create({
  //           data: {
  //             metricId: metricApplication.metric._id,
  //             habitId: habit._id,
  //           },
  //         }).then(() => {
  //           console.log(`Applied ${metricApplication.metric.name} to ${habit.name}`);
  //         });
  //       });
  //       prisma.actionSchedule.create({
  //         data: {
  //           habitId: habit._id,
  //           frequency: "DAY",
  //           multiplier: 1,
  //         },
  //       });
  //     });
  //   });
  //   const habits = await prisma.habit.findMany({
  //     where: {
  //       userId: user._id,
  //     },
  //     include: {
  //       act: true,
  //     },
  //   });
  //   habits.forEach(async (habit) => {
  //     console.log(`Creating tasks for habit ${habit._id} ...`);
  //     await prisma.task.create({
  //       data: {
  //         userId: user._id,
  //         habitId: habit._id,
  //         title: habit.name,
  //       },
  //     });
  //   });
  //   [...Array(2)].map(async (_, i) => {
  //     try {
  //       const routine = await prisma.routine.create({
  //         data: {
  //           userId: user._id,
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
  //                 routineId: routine._id,
  //                 habitId: habit._id,
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
  //             _id: routine._id,
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
  //       userId: user._id,
  //       name: `Default`,
  //     },
  //   });
  //   if (calendar) {
  //     habits.forEach(async (habit) => {
  //       try {
  //         await prisma.actionSchedule.create({
  //           data: {
  //             habitId: habit._id,
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
  //                 calendarId: calendar._id,
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
    console.log("Finished.");
    process.exit();
  });
