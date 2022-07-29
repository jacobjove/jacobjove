import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateInput } from "../../../inputs/ItemUpdateInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateItemArgs {
  @TypeGraphQL.Field((_type) => ItemUpdateInput, { nullable: false })
  data!: ItemUpdateInput;

  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;
}
