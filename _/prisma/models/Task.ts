import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { CalendarEvent } from "./CalendarEvent";
import { Habit } from "./Habit";
import { User } from "./User";

@TypeGraphQL.ObjectType("Task", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Task extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  plannedStartDate?: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  dueDate?: Date | null;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  @Property({ required: false })
  parentId?: ObjectId | null;

  parent?: Task | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  habitId?: string | null;

  habit?: Habit | null;

  subtasks?: Task[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  rank!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  completedAt?: Date | null;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const TaskModel = getModelForClass<typeof Task>(Task);
export default TaskModel;
