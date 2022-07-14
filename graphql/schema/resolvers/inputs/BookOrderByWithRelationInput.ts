import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorshipOrderByRelationAggregateInput } from "../inputs/AuthorshipOrderByRelationAggregateInput";
import { BookReviewOrderByRelationAggregateInput } from "../inputs/BookReviewOrderByRelationAggregateInput";
import { ReadingOrderByRelationAggregateInput } from "../inputs/ReadingOrderByRelationAggregateInput";
import { ShelvingOrderByRelationAggregateInput } from "../inputs/ShelvingOrderByRelationAggregateInput";

@TypeGraphQL.InputType("BookOrderByWithRelationInput", {
  isAbstract: true,
})
export class BookOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isbn?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isbn13?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorNames?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorNamesLf?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  publicationYear?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  originalPublicationYear?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  extra?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => AuthorshipOrderByRelationAggregateInput, {
    nullable: true,
  })
  authorships?: AuthorshipOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingOrderByRelationAggregateInput, {
    nullable: true,
  })
  readings?: ReadingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ShelvingOrderByRelationAggregateInput, {
    nullable: true,
  })
  shelvings?: ShelvingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewOrderByRelationAggregateInput, {
    nullable: true,
  })
  BookReview?: BookReviewOrderByRelationAggregateInput | undefined;
}
