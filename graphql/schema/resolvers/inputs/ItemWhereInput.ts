import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { ListRelationFilter } from "../inputs/ListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemWhereInput", {
  isAbstract: true,
})
export class ItemWhereInput {
  @TypeGraphQL.Field(() => [ItemWhereInput], { nullable: true })
  AND?: ItemWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemWhereInput], { nullable: true })
  OR?: ItemWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemWhereInput], { nullable: true })
  NOT?: ItemWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ListRelationFilter, { nullable: true })
  list?: ListRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  listId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  data?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
