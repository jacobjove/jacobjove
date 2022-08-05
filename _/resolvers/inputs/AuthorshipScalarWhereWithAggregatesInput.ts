import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorshipScalarWhereWithAggregatesInput", { isAbstract: true })
export class AuthorshipScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [AuthorshipScalarWhereWithAggregatesInput], { nullable: true })
  AND?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereWithAggregatesInput], { nullable: true })
  OR?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: AuthorshipScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  bookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  position?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
