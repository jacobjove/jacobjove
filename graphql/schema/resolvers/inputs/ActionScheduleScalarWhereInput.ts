import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActionScheduleScalarWhereInput", {
  isAbstract: true,
})
export class ActionScheduleScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereInput], { nullable: true })
  AND?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereInput], { nullable: true })
  OR?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereInput], { nullable: true })
  NOT?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  templateId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
