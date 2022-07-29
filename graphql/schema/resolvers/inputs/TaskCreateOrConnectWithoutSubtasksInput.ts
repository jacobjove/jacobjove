import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskCreateOrConnectWithoutSubtasksInput {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutSubtasksInput, { nullable: false })
  create!: TaskCreateWithoutSubtasksInput;
}
