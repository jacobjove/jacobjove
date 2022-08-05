import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemScalarWhereWithAggregatesInput", { isAbstract: true })
export class ItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  AND?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  OR?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ItemScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: ItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  listId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => JsonWithAggregatesFilter, { nullable: true })
  data?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
