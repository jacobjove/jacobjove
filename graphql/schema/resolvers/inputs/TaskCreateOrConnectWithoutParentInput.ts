import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutParentInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutParentInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutParentInput, { nullable: false })
  create!: TaskCreateWithoutParentInput;
}
