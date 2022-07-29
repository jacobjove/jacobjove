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
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => BookshelfCountOrderByAggregateInput, { nullable: true })
  _count?: BookshelfCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookshelfAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfMaxOrderByAggregateInput, { nullable: true })
  _max?: BookshelfMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfMinOrderByAggregateInput, { nullable: true })
  _min?: BookshelfMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfSumOrderByAggregateInput, { nullable: true })
  _sum?: BookshelfSumOrderByAggregateInput | undefined;
}
