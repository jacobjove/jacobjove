import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTaskArgs {
  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}
