import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { CategorizationOrderByRelationAggregateInput } from "../inputs/CategorizationOrderByRelationAggregateInput";

@TypeGraphQL.InputType("CategoryOrderByWithRelationInput", {
  isAbstract: true,
})
export class CategoryOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CategorizationOrderByRelationAggregateInput, { nullable: true })
  categorizations?: CategorizationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
