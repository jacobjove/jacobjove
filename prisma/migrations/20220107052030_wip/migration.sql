/*
  Warnings:

  - The primary key for the `Calendar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Calendar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `calendarEvents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `calendarEvents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserIdentity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uid]` on the table `Calendar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `calendarEvents` will be added. If there are existing duplicate values, this will fail.
  - The required column `uid` was added to the `Calendar` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uid` was added to the `calendarEvents` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Changed the type of `calendarId` on the `calendarEvents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FREQUENCY" AS ENUM ('MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_actionId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserIdentity" DROP CONSTRAINT "UserIdentity_identityId_fkey";

-- DropForeignKey
ALTER TABLE "UserIdentity" DROP CONSTRAINT "UserIdentity_userId_fkey";

-- DropForeignKey
ALTER TABLE "calendarEvents" DROP CONSTRAINT "calendarEvents_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "calendarEvents" DROP CONSTRAINT "calendarEvents_scheduleId_fkey";

-- AlterTable
ALTER TABLE "ActionCompletion" ADD COLUMN     "archivedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Calendar" DROP CONSTRAINT "Calendar_pkey",
ADD COLUMN     "uid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ADD CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "settings" JSONB NOT NULL DEFAULT E'{}';

-- AlterTable
ALTER TABLE "calendarEvents" DROP CONSTRAINT "calendarEvents_pkey",
ADD COLUMN     "allDay" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "uid" TEXT NOT NULL,
ADD COLUMN     "userActionId" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "calendarId",
ADD COLUMN     "calendarId" INTEGER NOT NULL,
ALTER COLUMN "end" DROP NOT NULL,
ADD CONSTRAINT "calendarEvents_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Schedule";

-- DropTable
DROP TABLE "UserIdentity";

-- DropEnum
DROP TYPE "UNIT";

-- CreateTable
CREATE TABLE "ScheduleTemplate" (
    "id" SERIAL NOT NULL,
    "frequency" "FREQUENCY" NOT NULL DEFAULT E'DAY',
    "multiplier" INTEGER NOT NULL DEFAULT 1,
    "chron" TEXT,

    CONSTRAINT "ScheduleTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAction" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "actionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "UserAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionScheduleTemplate" (
    "id" SERIAL NOT NULL,
    "actionId" INTEGER NOT NULL,
    "scheduleTemplateId" INTEGER NOT NULL,
    "frequency" "FREQUENCY" NOT NULL DEFAULT E'DAY',
    "multiplier" INTEGER NOT NULL DEFAULT 1,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "chron" TEXT,

    CONSTRAINT "ActionScheduleTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActionSchedule" (
    "id" SERIAL NOT NULL,
    "userActionId" INTEGER NOT NULL,
    "frequency" "FREQUENCY" NOT NULL DEFAULT E'DAY',
    "multiplier" INTEGER NOT NULL DEFAULT 1,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "actionScheduleTemplateId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "archivedAt" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserActionSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userIdentities" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "identityId" INTEGER NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "userIdentities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "userActionId" INTEGER NOT NULL,
    "goalId" INTEGER,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routines" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "durationInMinutes" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "routines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineAction" (
    "id" SERIAL NOT NULL,
    "position" INTEGER NOT NULL,
    "durationInMinutes" INTEGER NOT NULL,
    "routineId" INTEGER NOT NULL,
    "actionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "RoutineAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAction_userId_actionId_key" ON "UserAction"("userId", "actionId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionScheduleTemplate_actionId_frequency_multiplier_key" ON "ActionScheduleTemplate"("actionId", "frequency", "multiplier");

-- CreateIndex
CREATE UNIQUE INDEX "userIdentities_userId_identityId_key" ON "userIdentities"("userId", "identityId");

-- CreateIndex
CREATE UNIQUE INDEX "RoutineAction_routineId_actionId_key" ON "RoutineAction"("routineId", "actionId");

-- CreateIndex
CREATE UNIQUE INDEX "Calendar_uid_unique_constraint" ON "Calendar"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "CalendarEvent_uid_unique_constraint" ON "calendarEvents"("uid");

-- AddForeignKey
ALTER TABLE "calendarEvents" ADD CONSTRAINT "calendarEvents_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendarEvents" ADD CONSTRAINT "calendarEvents_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "UserActionSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendarEvents" ADD CONSTRAINT "calendarEvents_userActionId_fkey" FOREIGN KEY ("userActionId") REFERENCES "UserAction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAction" ADD CONSTRAINT "UserAction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAction" ADD CONSTRAINT "UserAction_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionScheduleTemplate" ADD CONSTRAINT "ActionScheduleTemplate_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionScheduleTemplate" ADD CONSTRAINT "ActionScheduleTemplate_scheduleTemplateId_fkey" FOREIGN KEY ("scheduleTemplateId") REFERENCES "ScheduleTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActionSchedule" ADD CONSTRAINT "UserActionSchedule_userActionId_fkey" FOREIGN KEY ("userActionId") REFERENCES "UserAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActionSchedule" ADD CONSTRAINT "UserActionSchedule_actionScheduleTemplateId_fkey" FOREIGN KEY ("actionScheduleTemplateId") REFERENCES "ActionScheduleTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userIdentities" ADD CONSTRAINT "userIdentities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userIdentities" ADD CONSTRAINT "userIdentities_identityId_fkey" FOREIGN KEY ("identityId") REFERENCES "identities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userActionId_fkey" FOREIGN KEY ("userActionId") REFERENCES "UserAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routines" ADD CONSTRAINT "routines_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineAction" ADD CONSTRAINT "RoutineAction_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineAction" ADD CONSTRAINT "RoutineAction_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
