import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemArgs {
  @TypeGraphQL.Field((_type) => ItemWhereInput, { nullable: true })
  where?: ItemWhereInput | undefined;
}
