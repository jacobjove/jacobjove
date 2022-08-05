import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { BookAvgOrderByAggregateInput } from "../inputs/BookAvgOrderByAggregateInput";
import { BookCountOrderByAggregateInput } from "../inputs/BookCountOrderByAggregateInput";
import { BookMaxOrderByAggregateInput } from "../inputs/BookMaxOrderByAggregateInput";
import { BookMinOrderByAggregateInput } from "../inputs/BookMinOrderByAggregateInput";
import { BookSumOrderByAggregateInput } from "../inputs/BookSumOrderByAggregateInput";

@TypeGraphQL.InputType("BookOrderByWithAggregationInput", { isAbstract: true })
export class BookOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isbn?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isbn13?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  authorNames?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  authorNamesLf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  publicationYear?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  originalPublicationYear?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  extra?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BookCountOrderByAggregateInput, { nullable: true })
  _count?: BookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookMaxOrderByAggregateInput, { nullable: true })
  _max?: BookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookMinOrderByAggregateInput, { nullable: true })
  _min?: BookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookSumOrderByAggregateInput, { nullable: true })
  _sum?: BookSumOrderByAggregateInput | undefined;
}
