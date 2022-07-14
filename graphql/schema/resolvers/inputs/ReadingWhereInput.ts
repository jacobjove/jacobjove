import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [ReadingWhereInput], {
    nullable: true,
  })
  AND?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereInput], {
    nullable: true,
  })
  OR?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingWhereInput], {
    nullable: true,
  })
  NOT?: ReadingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BookRelationFilter, {
    nullable: true,
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  dateStarted?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  dateFinished?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BookReviewRelationFilter, {
    nullable: true,
  })
  review?: BookReviewRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
