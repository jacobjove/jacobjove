import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateWithoutUserInput } from "../inputs/TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutUserInput, { nullable: false })
  data!: TaskUpdateWithoutUserInput;
}
