import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorAvgOrderByAggregateInput } from "../inputs/AuthorAvgOrderByAggregateInput";
import { AuthorCountOrderByAggregateInput } from "../inputs/AuthorCountOrderByAggregateInput";
import { AuthorMaxOrderByAggregateInput } from "../inputs/AuthorMaxOrderByAggregateInput";
import { AuthorMinOrderByAggregateInput } from "../inputs/AuthorMinOrderByAggregateInput";
import { AuthorSumOrderByAggregateInput } from "../inputs/AuthorSumOrderByAggregateInput";

@TypeGraphQL.InputType("AuthorOrderByWithAggregationInput", { isAbstract: true })
export class AuthorOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => AuthorCountOrderByAggregateInput, { nullable: true })
  _count?: AuthorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorAvgOrderByAggregateInput, { nullable: true })
  _avg?: AuthorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorMaxOrderByAggregateInput, { nullable: true })
  _max?: AuthorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorMinOrderByAggregateInput, { nullable: true })
  _min?: AuthorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorSumOrderByAggregateInput, { nullable: true })
  _sum?: AuthorSumOrderByAggregateInput | undefined;
}
