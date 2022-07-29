import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { BookshelfAvgOrderByAggregateInput } from "../inputs/BookshelfAvgOrderByAggregateInput";
import { BookshelfCountOrderByAggregateInput } from "../inputs/BookshelfCountOrderByAggregateInput";
import { BookshelfMaxOrderByAggregateInput } from "../inputs/BookshelfMaxOrderByAggregateInput";
import { BookshelfMinOrderByAggregateInput } from "../inputs/BookshelfMinOrderByAggregateInput";
import { BookshelfSumOrderByAggregateInput } from "../inputs/BookshelfSumOrderByAggregateInput";

@TypeGraphQL.InputType("BookshelfOrderByWithAggregationInput", {
  isAbstract: true,
})
export class BookshelfOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BookshelfCountOrderByAggregateInput, { nullable: true })
  _count?: BookshelfCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookshelfAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookshelfAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookshelfMaxOrderByAggregateInput, { nullable: true })
  _max?: BookshelfMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookshelfMinOrderByAggregateInput, { nullable: true })
  _min?: BookshelfMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookshelfSumOrderByAggregateInput, { nullable: true })
  _sum?: BookshelfSumOrderByAggregateInput | undefined;
}
