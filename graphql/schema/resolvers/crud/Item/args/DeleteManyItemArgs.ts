import * as TypeGraphQL from "type-graphql";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemArgs {
  @TypeGraphQL.Field((_type) => ItemWhereInput, {
    nullable: true,
  })
  where?: ItemWhereInput | undefined;
}
