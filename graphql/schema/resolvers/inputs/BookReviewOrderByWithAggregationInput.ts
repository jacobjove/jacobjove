import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { BookReviewAvgOrderByAggregateInput } from "../inputs/BookReviewAvgOrderByAggregateInput";
import { BookReviewCountOrderByAggregateInput } from "../inputs/BookReviewCountOrderByAggregateInput";
import { BookReviewMaxOrderByAggregateInput } from "../inputs/BookReviewMaxOrderByAggregateInput";
import { BookReviewMinOrderByAggregateInput } from "../inputs/BookReviewMinOrderByAggregateInput";
import { BookReviewSumOrderByAggregateInput } from "../inputs/BookReviewSumOrderByAggregateInput";

@TypeGraphQL.InputType("BookReviewOrderByWithAggregationInput", {
  isAbstract: true,
})
export class BookReviewOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  readingId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BookReviewCountOrderByAggregateInput, { nullable: true })
  _count?: BookReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookReviewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewMaxOrderByAggregateInput, { nullable: true })
  _max?: BookReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewMinOrderByAggregateInput, { nullable: true })
  _min?: BookReviewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewSumOrderByAggregateInput, { nullable: true })
  _sum?: BookReviewSumOrderByAggregateInput | undefined;
}
