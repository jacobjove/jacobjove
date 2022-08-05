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

@TypeGraphQL.InputType("BookWhereInput", { isAbstract: true })
export class BookWhereInput {
  @TypeGraphQL.Field(() => [BookWhereInput], { nullable: true })
  AND?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookWhereInput], { nullable: true })
  OR?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookWhereInput], { nullable: true })
  NOT?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  ids?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  isbn?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  isbn13?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  authorNames?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  authorNamesLf?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableFilter, { nullable: true })
  publicationYear?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableFilter, { nullable: true })
  originalPublicationYear?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  extra?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => AuthorshipListRelationFilter, { nullable: true })
  authorships?: AuthorshipListRelationFilter | undefined;

  @TypeGraphQL.Field(() => ReadingListRelationFilter, { nullable: true })
  readings?: ReadingListRelationFilter | undefined;

  @TypeGraphQL.Field(() => ShelvingListRelationFilter, { nullable: true })
  shelvings?: ShelvingListRelationFilter | undefined;

  @TypeGraphQL.Field(() => BookReviewListRelationFilter, { nullable: true })
  BookReview?: BookReviewListRelationFilter | undefined;
}
