import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateWithoutUserInput } from "../inputs/TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskUpdateWithoutUserInput, { nullable: false })
  data!: TaskUpdateWithoutUserInput;
}
