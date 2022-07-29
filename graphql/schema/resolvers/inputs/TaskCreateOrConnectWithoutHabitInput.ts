import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutHabitInput } from "../inputs/TaskCreateWithoutHabitInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutHabitInput, { nullable: false })
  create!: TaskCreateWithoutHabitInput;
}
