import * as TypeGraphQL from "type-graphql";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskUpdateWithoutUserInput } from "../inputs/TaskUpdateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, {
    nullable: false,
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: TaskUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutUserInput, {
    nullable: false,
  })
  create!: TaskCreateWithoutUserInput;
}
