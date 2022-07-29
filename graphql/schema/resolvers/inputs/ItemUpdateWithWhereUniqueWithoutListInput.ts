import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateWithoutListInput } from "../inputs/ItemUpdateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateWithWhereUniqueWithoutListInput", {
  isAbstract: true,
})
export class ItemUpdateWithWhereUniqueWithoutListInput {
  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ItemUpdateWithoutListInput, { nullable: false })
  data!: ItemUpdateWithoutListInput;
}
