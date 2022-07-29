import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipListRelationFilter } from "../inputs/AuthorshipListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorWhereInput", {
  isAbstract: true,
})
export class AuthorWhereInput {
  @TypeGraphQL.Field((_type) => [AuthorWhereInput], { nullable: true })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorWhereInput], { nullable: true })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorWhereInput], { nullable: true })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipListRelationFilter, { nullable: true })
  authorships?: AuthorshipListRelationFilter | undefined;
}
