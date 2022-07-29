import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEvent } from "../models/CalendarEvent";
import { Habit } from "../models/Habit";
import { User } from "../models/User";
import { TaskCount } from "../resolvers/outputs/TaskCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Task", {
  isAbstract: true,
})
export class Task extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  plannedStartDate?: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dueDate?: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: true })
  parentId?: string | null;

  parent?: Task | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId?: string | null;

  habit?: Habit | null;

  subtasks?: Task[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rank!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  completedAt?: Date | null;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => TaskCount, { nullable: true })
  _count?: TaskCount | null;
}
