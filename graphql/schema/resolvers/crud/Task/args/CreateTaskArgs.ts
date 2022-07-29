import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateInput } from "../../../inputs/TaskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTaskArgs {
  @TypeGraphQL.Field(() => TaskCreateInput, { nullable: false })
  data!: TaskCreateInput;
}
