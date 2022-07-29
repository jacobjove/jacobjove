import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateInput } from "../../../inputs/ItemUpdateInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateItemArgs {
  @TypeGraphQL.Field(() => ItemUpdateInput, { nullable: false })
  data!: ItemUpdateInput;

  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;
}
