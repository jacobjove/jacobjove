import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorshipOrderByRelationAggregateInput } from "../inputs/AuthorshipOrderByRelationAggregateInput";
import { BookReviewOrderByRelationAggregateInput } from "../inputs/BookReviewOrderByRelationAggregateInput";
import { ReadingOrderByRelationAggregateInput } from "../inputs/ReadingOrderByRelationAggregateInput";
import { ShelvingOrderByRelationAggregateInput } from "../inputs/ShelvingOrderByRelationAggregateInput";

@TypeGraphQL.InputType("BookOrderByWithRelationInput", {
  isAbstract: true,
})
export class BookOrderByWithRelationInput {
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

  @TypeGraphQL.Field(() => AuthorshipOrderByRelationAggregateInput, { nullable: true })
  authorships?: AuthorshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ReadingOrderByRelationAggregateInput, { nullable: true })
  readings?: ReadingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ShelvingOrderByRelationAggregateInput, { nullable: true })
  shelvings?: ShelvingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => BookReviewOrderByRelationAggregateInput, { nullable: true })
  BookReview?: BookReviewOrderByRelationAggregateInput | undefined;
}
