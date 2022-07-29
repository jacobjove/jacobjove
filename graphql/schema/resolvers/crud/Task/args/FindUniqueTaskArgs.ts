import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTaskArgs {
  @TypeGraphQL.Field((_type) => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}
