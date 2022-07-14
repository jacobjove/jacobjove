import * as TypeGraphQL from "type-graphql";
import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorshipWhereInput", {
  isAbstract: true,
})
export class AuthorshipWhereInput {
  @TypeGraphQL.Field((_type) => [AuthorshipWhereInput], {
    nullable: true,
  })
  AND?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereInput], {
    nullable: true,
  })
  OR?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereInput], {
    nullable: true,
  })
  NOT?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => AuthorRelationFilter, {
    nullable: true,
  })
  author?: AuthorRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BookRelationFilter, {
    nullable: true,
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  position?: IntFilter | undefined;

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
