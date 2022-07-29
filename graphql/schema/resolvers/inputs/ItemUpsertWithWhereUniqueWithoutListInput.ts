import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemUpdateWithoutListInput } from "../inputs/ItemUpdateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpsertWithWhereUniqueWithoutListInput", {
  isAbstract: true,
})
export class ItemUpsertWithWhereUniqueWithoutListInput {
  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(() => ItemUpdateWithoutListInput, { nullable: false })
  update!: ItemUpdateWithoutListInput;

  @TypeGraphQL.Field(() => ItemCreateWithoutListInput, { nullable: false })
  create!: ItemCreateWithoutListInput;
}
