import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventCreateNestedManyWithoutTaskInput } from "../inputs/CalendarEventCreateNestedManyWithoutTaskInput";
import { HabitCreateNestedOneWithoutTasksInput } from "../inputs/HabitCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutSubtasksInput } from "../inputs/TaskCreateNestedOneWithoutSubtasksInput";

@TypeGraphQL.InputType("TaskCreateWithoutUserInput", {
  isAbstract: true,
})
export class TaskCreateWithoutUserInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  plannedStartDate?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rank?: number | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => TaskCreateNestedOneWithoutSubtasksInput, { nullable: true })
  parent?: TaskCreateNestedOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutTasksInput, { nullable: true })
  habit?: HabitCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => TaskCreateNestedManyWithoutParentInput, { nullable: true })
  subtasks?: TaskCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateNestedManyWithoutTaskInput, { nullable: true })
  calendarEvents?: CalendarEventCreateNestedManyWithoutTaskInput | undefined;
}
