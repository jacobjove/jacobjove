import * as TypeGraphQL from "type-graphql";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemListRelationFilter", {
  isAbstract: true,
})
export class ItemListRelationFilter {
  @TypeGraphQL.Field((_type) => ItemWhereInput, {
    nullable: true,
  })
  every?: ItemWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ItemWhereInput, {
    nullable: true,
  })
  some?: ItemWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ItemWhereInput, {
    nullable: true,
  })
  none?: ItemWhereInput | undefined;
}
