import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateInput } from "../../../inputs/ItemCreateInput";
import { ItemUpdateInput } from "../../../inputs/ItemUpdateInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertItemArgs {
  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(() => ItemCreateInput, { nullable: false })
  create!: ItemCreateInput;

  @TypeGraphQL.Field(() => ItemUpdateInput, { nullable: false })
  update!: ItemUpdateInput;
}
