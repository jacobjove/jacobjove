import * as TypeGraphQL from "type-graphql";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";

@TypeGraphQL.InputType("TaskUpsertWithoutSubtasksInput", {
  isAbstract: true,
})
export class TaskUpsertWithoutSubtasksInput {
  @TypeGraphQL.Field((_type) => TaskUpdateWithoutSubtasksInput, {
    nullable: false,
  })
  update!: TaskUpdateWithoutSubtasksInput;

  @TypeGraphQL.Field((_type) => TaskCreateWithoutSubtasksInput, {
    nullable: false,
  })
  create!: TaskCreateWithoutSubtasksInput;
}
