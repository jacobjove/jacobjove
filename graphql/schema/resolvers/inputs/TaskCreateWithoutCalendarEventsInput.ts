import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutTasksInput } from "../inputs/HabitCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutSubtasksInput } from "../inputs/TaskCreateNestedOneWithoutSubtasksInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";

@TypeGraphQL.InputType("TaskCreateWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class TaskCreateWithoutCalendarEventsInput {
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

  @TypeGraphQL.Field((_type) => TaskCreateNestedOneWithoutSubtasksInput, {
    nullable: true,
  })
  parent?: TaskCreateNestedOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutTasksInput, {
    nullable: true,
  })
  habit?: HabitCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedManyWithoutParentInput, {
    nullable: true,
  })
  subtasks?: TaskCreateNestedManyWithoutParentInput | undefined;
}
