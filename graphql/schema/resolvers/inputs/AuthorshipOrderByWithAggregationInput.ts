import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AuthorshipCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: AuthorshipAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AuthorshipMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AuthorshipMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: AuthorshipSumOrderByAggregateInput | undefined;
}
