import sampleSize from "lodash/sampleSize";
import prisma from "../lib/prisma";
import actsData from "./seeds/acts";
import identitiesData from "./seeds/identities";
import metricsData from "./seeds/metrics";
import tasksData from "./seeds/tasks";
import usersData, { userUid } from "./seeds/users";
import valuesData from "./seeds/values";

async function main() {
  const adminEmail = process.env.ADMIN_USER || `test@gmail.com`;

  const deleteValues = prisma.value.deleteMany();
  const deleteIdentities = prisma.identity.deleteMany();
  const deleteTasks = prisma.task.deleteMany();
  const deleteMetrics = prisma.metric.deleteMany();
  const deleteActions = prisma.action.deleteMany();
  const deleteActionSchedules = prisma.actionSchedule.deleteMany();
  const deleteRoutineHabits = prisma.routineHabit.deleteMany();
  const deleteRoutines = prisma.routine.deleteMany();
  const deleteNotes = prisma.note.deleteMany();
  const deleteNotebooks = prisma.notebook.deleteMany();
  const deleteActs = prisma.act.deleteMany();
  const deleteUsers = prisma.user.deleteMany();

  await prisma.$transaction([
    deleteValues,
    deleteIdentities,
    deleteTasks,
    deleteMetrics,
    deleteActions,
    deleteActionSchedules,
    deleteRoutineHabits,
    deleteRoutines,
    deleteNotes,
    deleteNotebooks,
    deleteActs,
    deleteUsers,
  ]);

  await prisma.user.create({
    data: {
      uid: userUid,
      email: adminEmail,
      isAdmin: true,
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      email: adminEmail,
    },
  });
  if (!user) {
    throw new Error(`Could not find user with email ${adminEmail}`);
  }

  await prisma.user.createMany({
    data: usersData,
  });
  const users = await prisma.user.findMany();

  for (const taskData of tasksData) {
    const { subtasks, ...rest } = taskData;
    const data = rest as typeof rest & { userId: number };
    data.userId = user.id;
    const parentTask = await prisma.task.create({ data });
    if (subtasks) {
      for (const subtask of subtasks) {
        const data = subtask as typeof subtask & { userId: number; parentId: number };
        data.userId = user.id;
        data.parentId = parentTask.id;
        await prisma.task.create({ data });
      }
    }
  }
  // const tasks = await prisma.task.findMany();

  await prisma.identity.createMany({
    data: identitiesData,
  });
  const identities = await prisma.identity.findMany();

  await prisma.value.createMany({
    data: valuesData,
  });
  const values = await prisma.value.findMany();

  for (const actData of actsData) {
    const { variants: _variants, ...data } = actData;
    const variants = _variants || [];
    const parentAct = await prisma.act.create({ data });
    for (const variantData of variants) {
      const data = variantData as typeof variantData & { parentId?: number };
      data.parentId = parentAct.id;
      await prisma.act.create({ data });
    }
  }
  const acts = await prisma.act.findMany();

  await prisma.metric.createMany({
    data: metricsData,
  });
  const metrics = await prisma.act.findMany();

  acts.forEach((act) => {
    prisma.metricApplication.create({
      data: {
        actId: act.id,
        metricId: metrics[0].id,
      },
    });
  });

  users.forEach(async (user) => {
    sampleSize(identities, Math.floor(Math.random() * identities.length)).forEach((identity) => {
      try {
        prisma.identification.create({
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
    acts.forEach(async (act) => {
      try {
        const habit = await prisma.habit.create({
          data: {
            userId: user.id,
            actId: act.id,
            name: act.name,
          },
        });
        const metricApplications = await prisma.metricApplication.findMany({
          where: {
            actId: act.id,
          },
          include: {
            metric: true,
          },
        });
        metricApplications.forEach(async (metricApplication) => {
          await prisma.metricUsage.create({
            data: {
              metricId: metricApplication.metric.id,
              habitId: habit.id,
            },
          });
        });
        await prisma.actionSchedule.create({
          data: {
            habitId: habit.id,
            frequency: "DAY",
            multiplier: 1,
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
    const habits = await prisma.habit.findMany({
      where: {
        userId: user.id,
      },
      include: {
        act: true,
      },
    });
    console.log("Creating habit tasks...");
    habits.forEach(async (habit) => {
      await prisma.task.create({
        data: {
          userId: user.id,
          habitId: habit.id,
          title: habit.name,
        },
      });
    });
    [...Array(2)].map(async (_, i) => {
      try {
        const routine = await prisma.routine.create({
          data: {
            userId: user.id,
            name: `Routine ${i}`,
            notes:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        });
        let routineDurationInMinutes = 0;
        habits.forEach(async (habit, i) => {
          const doIt = true;
          if (doIt) {
            const actionDurationInMinutes = 10;
            try {
              await prisma.routineHabit.create({
                data: {
                  routineId: routine.id,
                  habitId: habit.id,
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
      habits.forEach(async (habit) => {
        try {
          await prisma.actionSchedule.create({
            data: {
              habitId: habit.id,
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
                  title: `${habit.name} event ${i}`,
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
