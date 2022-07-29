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
  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereInput], { nullable: true })
  AND?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereInput], { nullable: true })
  OR?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereInput], { nullable: true })
  NOT?: ActionScheduleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  templateId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
