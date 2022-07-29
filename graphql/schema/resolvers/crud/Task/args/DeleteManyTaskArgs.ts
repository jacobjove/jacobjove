import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskArgs {
  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;
}
