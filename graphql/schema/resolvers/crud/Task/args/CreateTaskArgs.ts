import * as TypeGraphQL from "type-graphql";
import { TaskCreateInput } from "../../../inputs/TaskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTaskArgs {
  @TypeGraphQL.Field((_type) => TaskCreateInput, {
    nullable: false,
  })
  data!: TaskCreateInput;
}
