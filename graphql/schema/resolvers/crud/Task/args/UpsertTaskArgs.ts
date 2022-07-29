import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskCreateInput } from "../../../inputs/TaskCreateInput";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTaskArgs {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(() => TaskCreateInput, { nullable: false })
  create!: TaskCreateInput;

  @TypeGraphQL.Field(() => TaskUpdateInput, { nullable: false })
  update!: TaskUpdateInput;
}
