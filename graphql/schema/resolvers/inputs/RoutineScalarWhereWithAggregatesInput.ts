import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RoutineScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class RoutineScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [RoutineScalarWhereWithAggregatesInput], { nullable: true })
  AND?: RoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineScalarWhereWithAggregatesInput], { nullable: true })
  OR?: RoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: RoutineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  durationInMinutes?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  notes?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
