import * as TypeGraphQL from "type-graphql";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskUpdateWithoutHabitInput } from "../inputs/TaskUpdateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: false,
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutHabitInput, {
    nullable: false,
  })
  update!: TaskUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutHabitInput, {
    nullable: false,
  })
  create!: TaskCreateWithoutHabitInput;
}
