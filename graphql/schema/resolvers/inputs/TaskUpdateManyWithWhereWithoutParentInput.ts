import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "../inputs/TaskUpdateManyMutationInput";

@TypeGraphQL.InputType("TaskUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true,
})
export class TaskUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field((_type) => TaskScalarWhereInput, { nullable: false })
  where!: TaskScalarWhereInput;

  @TypeGraphQL.Field((_type) => TaskUpdateManyMutationInput, { nullable: false })
  data!: TaskUpdateManyMutationInput;
}
