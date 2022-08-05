import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategorizationScalarWhereWithAggregatesInput", { isAbstract: true })
export class CategorizationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  categoryId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  actId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
