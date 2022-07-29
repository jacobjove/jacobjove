import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskUpdateWithoutHabitInput } from "../inputs/TaskUpdateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskUpdateWithoutHabitInput, { nullable: false })
  update!: TaskUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutHabitInput, { nullable: false })
  create!: TaskCreateWithoutHabitInput;
}
