import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BookScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  AND?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  OR?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => JsonWithAggregatesFilter, { nullable: true })
  ids?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  isbn?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  isbn13?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  authorNames?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  authorNamesLf?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  publicationYear?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  originalPublicationYear?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => JsonWithAggregatesFilter, { nullable: true })
  extra?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
