import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorshipWhereInput", { isAbstract: true })
export class AuthorshipWhereInput {
  @TypeGraphQL.Field(() => [AuthorshipWhereInput], { nullable: true })
  AND?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereInput], { nullable: true })
  OR?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereInput], { nullable: true })
  NOT?: AuthorshipWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => AuthorRelationFilter, { nullable: true })
  author?: AuthorRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
