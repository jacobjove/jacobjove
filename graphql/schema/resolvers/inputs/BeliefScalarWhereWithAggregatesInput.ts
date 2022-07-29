import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BeliefScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class BeliefScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [BeliefScalarWhereWithAggregatesInput], { nullable: true })
  AND?: BeliefScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefScalarWhereWithAggregatesInput], { nullable: true })
  OR?: BeliefScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: BeliefScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
