import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ItemListRelationFilter } from "../inputs/ItemListRelationFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ListWhereInput", { isAbstract: true })
export class ListWhereInput {
  @TypeGraphQL.Field(() => [ListWhereInput], { nullable: true })
  AND?: ListWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ListWhereInput], { nullable: true })
  OR?: ListWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ListWhereInput], { nullable: true })
  NOT?: ListWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  fields?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => ItemListRelationFilter, { nullable: true })
  items?: ItemListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
