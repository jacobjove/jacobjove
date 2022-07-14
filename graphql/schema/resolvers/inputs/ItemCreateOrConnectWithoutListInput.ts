import * as TypeGraphQL from "type-graphql";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutListInput", {
  isAbstract: true,
})
export class ItemCreateOrConnectWithoutListInput {
  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, {
    nullable: false,
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ItemCreateWithoutListInput, {
    nullable: false,
  })
  create!: ItemCreateWithoutListInput;
}
