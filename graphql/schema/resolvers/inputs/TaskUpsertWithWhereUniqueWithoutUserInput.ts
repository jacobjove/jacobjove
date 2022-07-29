import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskUpdateWithoutUserInput } from "../inputs/TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskUpdateWithoutUserInput, { nullable: false })
  update!: TaskUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutUserInput, { nullable: false })
  create!: TaskCreateWithoutUserInput;
}
