import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipListRelationFilter } from "../inputs/AuthorshipListRelationFilter";
import { BookReviewListRelationFilter } from "../inputs/BookReviewListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { ReadingListRelationFilter } from "../inputs/ReadingListRelationFilter";
import { ShelvingListRelationFilter } from "../inputs/ShelvingListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("BookWhereInput", {
  isAbstract: true,
})
export class BookWhereInput {
  @TypeGraphQL.Field((_type) => [BookWhereInput], { nullable: true })
  AND?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookWhereInput], { nullable: true })
  OR?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookWhereInput], { nullable: true })
  NOT?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonFilter, { nullable: true })
  ids?: JsonFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  isbn?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  isbn13?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, { nullable: true })
  authorNames?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, { nullable: true })
  authorNamesLf?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, { nullable: true })
  publicationYear?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, { nullable: true })
  originalPublicationYear?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonFilter, { nullable: true })
  extra?: JsonFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipListRelationFilter, { nullable: true })
  authorships?: AuthorshipListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ReadingListRelationFilter, { nullable: true })
  readings?: ReadingListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ShelvingListRelationFilter, { nullable: true })
  shelvings?: ShelvingListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => BookReviewListRelationFilter, { nullable: true })
  BookReview?: BookReviewListRelationFilter | undefined;
}
