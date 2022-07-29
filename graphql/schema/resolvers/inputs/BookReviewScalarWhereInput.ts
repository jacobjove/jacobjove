import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookReviewScalarWhereInput", {
  isAbstract: true,
})
export class BookReviewScalarWhereInput {
  @TypeGraphQL.Field(() => [BookReviewScalarWhereInput], { nullable: true })
  AND?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereInput], { nullable: true })
  OR?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereInput], { nullable: true })
  NOT?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  review?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  readingId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
