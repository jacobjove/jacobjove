import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyMutationInput } from "../inputs/ItemUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemUpdateManyWithWhereWithoutListInput", {
  isAbstract: true,
})
export class ItemUpdateManyWithWhereWithoutListInput {
  @TypeGraphQL.Field((_type) => ItemScalarWhereInput, { nullable: false })
  where!: ItemScalarWhereInput;

  @TypeGraphQL.Field((_type) => ItemUpdateManyMutationInput, { nullable: false })
  data!: ItemUpdateManyMutationInput;
}
