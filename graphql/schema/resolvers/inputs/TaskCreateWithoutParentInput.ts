import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventCreateNestedManyWithoutTaskInput } from "../inputs/CalendarEventCreateNestedManyWithoutTaskInput";
import { HabitCreateNestedOneWithoutTasksInput } from "../inputs/HabitCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";

@TypeGraphQL.InputType("TaskCreateWithoutParentInput", {
  isAbstract: true,
})
export class TaskCreateWithoutParentInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  plannedStartDate?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  rank?: number | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutTasksInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutTasksInput;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutTasksInput, {
    nullable: true,
  })
  habit?: HabitCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedManyWithoutParentInput, {
    nullable: true,
  })
  subtasks?: TaskCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateNestedManyWithoutTaskInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventCreateNestedManyWithoutTaskInput | undefined;
}
