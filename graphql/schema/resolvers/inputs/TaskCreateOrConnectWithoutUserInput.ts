import * as TypeGraphQL from "type-graphql";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: false,
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutUserInput, {
    nullable: false,
  })
  create!: TaskCreateWithoutUserInput;
}
