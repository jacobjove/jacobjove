import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutUserInput, { nullable: false })
  create!: TaskCreateWithoutUserInput;
}
