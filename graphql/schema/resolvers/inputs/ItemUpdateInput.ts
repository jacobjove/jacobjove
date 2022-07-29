import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemData } from "../../models/Item";
import { ListUpdateOneRequiredWithoutItemsInput } from "../inputs/ListUpdateOneRequiredWithoutItemsInput";

@TypeGraphQL.InputType("ItemUpdateInput", {
  isAbstract: true,
})
export class ItemUpdateInput {
  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  data?: ItemData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ListUpdateOneRequiredWithoutItemsInput, { nullable: true })
  list?: ListUpdateOneRequiredWithoutItemsInput | undefined;
}
