import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "../inputs/TaskUpdateManyMutationInput";

@TypeGraphQL.InputType("TaskUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true,
})
export class TaskUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field(() => TaskScalarWhereInput, { nullable: false })
  where!: TaskScalarWhereInput;

  @TypeGraphQL.Field(() => TaskUpdateManyMutationInput, { nullable: false })
  data!: TaskUpdateManyMutationInput;
}
