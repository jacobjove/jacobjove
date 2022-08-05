import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateWithoutListInput } from "../inputs/ItemCreateWithoutListInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutListInput", { isAbstract: true })
export class ItemCreateOrConnectWithoutListInput {
  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(() => ItemCreateWithoutListInput, { nullable: false })
  create!: ItemCreateWithoutListInput;
}
