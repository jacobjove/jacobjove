import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  AND?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  OR?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, { nullable: true })
  listId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonWithAggregatesFilter, { nullable: true })
  data?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
