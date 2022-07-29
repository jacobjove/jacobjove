import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTaskArgs {
  @TypeGraphQL.Field(() => TaskUpdateInput, { nullable: false })
  data!: TaskUpdateInput;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}
