import * as TypeGraphQL from "type-graphql";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteItemArgs {
  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, {
    nullable: false,
  })
  where!: ItemWhereUniqueInput;
}
