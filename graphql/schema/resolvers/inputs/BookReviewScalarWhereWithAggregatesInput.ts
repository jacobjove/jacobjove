import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookReviewScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BookReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [BookReviewScalarWhereWithAggregatesInput], { nullable: true })
  AND?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereWithAggregatesInput], { nullable: true })
  OR?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  review?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  bookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  readingId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
