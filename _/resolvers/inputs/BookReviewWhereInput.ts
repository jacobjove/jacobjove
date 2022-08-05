import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReadingRelationFilter } from "../inputs/ReadingRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookReviewWhereInput", { isAbstract: true })
export class BookReviewWhereInput {
  @TypeGraphQL.Field(() => [BookReviewWhereInput], { nullable: true })
  AND?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereInput], { nullable: true })
  OR?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereInput], { nullable: true })
  NOT?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  review?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ReadingRelationFilter, { nullable: true })
  reading?: ReadingRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  readingId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
