import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorshipScalarWhereInput", { isAbstract: true })
export class AuthorshipScalarWhereInput {
  @TypeGraphQL.Field(() => [AuthorshipScalarWhereInput], { nullable: true })
  AND?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereInput], { nullable: true })
  OR?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereInput], { nullable: true })
  NOT?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter | undefined;

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
