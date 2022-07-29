import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";

@TypeGraphQL.InputType("TaskUpsertWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskUpsertWithoutSubtasksInput {
  @TypeGraphQL.Field(() => TaskUpdateWithoutSubtasksInput, { nullable: false })
  update!: TaskUpdateWithoutSubtasksInput;

  @TypeGraphQL.Field(() => TaskCreateWithoutSubtasksInput, { nullable: false })
  create!: TaskCreateWithoutSubtasksInput;
}
