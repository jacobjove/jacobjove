import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorScalarWhereWithAggregatesInput", { isAbstract: true })
export class AuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
