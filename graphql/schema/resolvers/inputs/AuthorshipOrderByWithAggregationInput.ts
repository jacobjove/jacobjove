import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorshipAvgOrderByAggregateInput } from "../inputs/AuthorshipAvgOrderByAggregateInput";
import { AuthorshipCountOrderByAggregateInput } from "../inputs/AuthorshipCountOrderByAggregateInput";
import { AuthorshipMaxOrderByAggregateInput } from "../inputs/AuthorshipMaxOrderByAggregateInput";
import { AuthorshipMinOrderByAggregateInput } from "../inputs/AuthorshipMinOrderByAggregateInput";
import { AuthorshipSumOrderByAggregateInput } from "../inputs/AuthorshipSumOrderByAggregateInput";

@TypeGraphQL.InputType("AuthorshipOrderByWithAggregationInput", {
  isAbstract: true,
})
export class AuthorshipOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => AuthorshipCountOrderByAggregateInput, { nullable: true })
  _count?: AuthorshipCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipAvgOrderByAggregateInput, { nullable: true })
  _avg?: AuthorshipAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipMaxOrderByAggregateInput, { nullable: true })
  _max?: AuthorshipMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipMinOrderByAggregateInput, { nullable: true })
  _min?: AuthorshipMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipSumOrderByAggregateInput, { nullable: true })
  _sum?: AuthorshipSumOrderByAggregateInput | undefined;
}
