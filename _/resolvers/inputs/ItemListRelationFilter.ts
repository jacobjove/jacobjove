import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemListRelationFilter", { isAbstract: true })
export class ItemListRelationFilter {
  @TypeGraphQL.Field(() => ItemWhereInput, { nullable: true })
  every?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(() => ItemWhereInput, { nullable: true })
  some?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(() => ItemWhereInput, { nullable: true })
  none?: ItemWhereInput | undefined;
}
