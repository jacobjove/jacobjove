import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipListRelationFilter } from "../inputs/AuthorshipListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorWhereInput", { isAbstract: true })
export class AuthorWhereInput {
  @TypeGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorWhereInput], { nullable: true })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => AuthorshipListRelationFilter, { nullable: true })
  authorships?: AuthorshipListRelationFilter | undefined;
}
