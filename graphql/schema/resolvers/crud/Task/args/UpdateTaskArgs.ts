import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTaskArgs {
  @TypeGraphQL.Field((_type) => TaskUpdateInput, { nullable: false })
  data!: TaskUpdateInput;

  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}
