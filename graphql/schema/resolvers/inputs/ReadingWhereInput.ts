import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { BookReviewRelationFilter } from "../inputs/BookReviewRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReadingWhereInput", {
  isAbstract: true,
})
export class ReadingWhereInput {
  @TypeGraphQL.Field(() => [ReadingWhereInput], { nullable: true })
  AND?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereInput], { nullable: true })
  OR?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingWhereInput], { nullable: true })
  NOT?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  dateStarted?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  dateFinished?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => BookReviewRelationFilter, { nullable: true })
  review?: BookReviewRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
