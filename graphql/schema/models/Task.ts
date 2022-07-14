import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  plannedStartDate?: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dueDate?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  parentId?: string | null;

  parent?: Task | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId?: string | null;

  habit?: Habit | null;

  subtasks?: Task[];

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  rank!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  completedAt?: Date | null;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => TaskCount, {
    nullable: true,
  })
  _count?: TaskCount | null;
}
