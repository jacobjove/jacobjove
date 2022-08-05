import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumFREQUENCYWithAggregatesFilter } from "../inputs/EnumFREQUENCYWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionScheduleScalarWhereWithAggregatesInput", { isAbstract: true })
export class ActionScheduleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYWithAggregatesFilter, { nullable: true })
  frequency?: EnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  multiplier?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  active?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  templateId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
