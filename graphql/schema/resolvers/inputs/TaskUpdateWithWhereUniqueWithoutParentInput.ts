import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateWithoutParentInput } from "../inputs/TaskUpdateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true,
})
export class TaskUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutParentInput, { nullable: false })
  data!: TaskUpdateWithoutParentInput;
}
