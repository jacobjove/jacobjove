import * as TypeGraphQL from "type-graphql";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemUpdateWithoutListInput } from "../inputs/ItemUpdateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpsertWithWhereUniqueWithoutListInput", {
  isAbstract: true,
})
export class ItemUpsertWithWhereUniqueWithoutListInput {
  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, {
    nullable: false,
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ItemUpdateWithoutListInput, {
    nullable: false,
  })
  update!: ItemUpdateWithoutListInput;

  @TypeGraphQL.Field((_type) => ItemCreateWithoutListInput, {
    nullable: false,
  })
  create!: ItemCreateWithoutListInput;
}
