import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyMutationInput } from "../inputs/ItemUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemUpdateManyWithWhereWithoutListInput", {
  isAbstract: true,
})
export class ItemUpdateManyWithWhereWithoutListInput {
  @TypeGraphQL.Field(() => ItemScalarWhereInput, { nullable: false })
  where!: ItemScalarWhereInput;

  @TypeGraphQL.Field(() => ItemUpdateManyMutationInput, { nullable: false })
  data!: ItemUpdateManyMutationInput;
}
