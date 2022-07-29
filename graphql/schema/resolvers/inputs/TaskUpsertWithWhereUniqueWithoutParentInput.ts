import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskUpdateWithoutParentInput } from "../inputs/TaskUpdateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true,
})
export class TaskUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskUpdateWithoutParentInput, { nullable: false })
  update!: TaskUpdateWithoutParentInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutParentInput, { nullable: false })
  create!: TaskCreateWithoutParentInput;
}
