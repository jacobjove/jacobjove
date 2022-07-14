import * as TypeGraphQL from "type-graphql";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumFREQUENCYWithAggregatesFilter } from "../inputs/EnumFREQUENCYWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionScheduleScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ActionScheduleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ActionScheduleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYWithAggregatesFilter, {
    nullable: true,
  })
  frequency?: EnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  multiplier?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolWithAggregatesFilter, {
    nullable: true,
  })
  active?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  templateId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
