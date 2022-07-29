import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateWithoutHabitInput } from "../inputs/TaskUpdateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskUpdateWithoutHabitInput, { nullable: false })
  data!: TaskUpdateWithoutHabitInput;
}
