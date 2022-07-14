import * as TypeGraphQL from "type-graphql";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskArgs {
  @TypeGraphQL.Field((_type) => TaskWhereInput, {
    nullable: true,
  })
  where?: TaskWhereInput | undefined;
}
