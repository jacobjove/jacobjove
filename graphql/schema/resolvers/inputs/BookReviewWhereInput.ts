import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReadingRelationFilter } from "../inputs/ReadingRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookReviewWhereInput", {
  isAbstract: true,
})
export class BookReviewWhereInput {
  @TypeGraphQL.Field((_type) => [BookReviewWhereInput], { nullable: true })
  AND?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereInput], { nullable: true })
  OR?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereInput], { nullable: true })
  NOT?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  review?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ReadingRelationFilter, { nullable: true })
  reading?: ReadingRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  readingId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
