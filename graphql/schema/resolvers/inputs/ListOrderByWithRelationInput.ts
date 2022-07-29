import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ItemOrderByRelationAggregateInput } from "../inputs/ItemOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@TypeGraphQL.InputType("ListOrderByWithRelationInput", {
  isAbstract: true,
})
export class ListOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  owner?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ItemOrderByRelationAggregateInput, { nullable: true })
  items?: ItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
