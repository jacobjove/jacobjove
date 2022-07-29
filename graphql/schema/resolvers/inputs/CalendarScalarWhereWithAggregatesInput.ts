import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCalendarProviderNullableWithAggregatesFilter } from "../inputs/EnumCalendarProviderNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CalendarScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class CalendarScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [CalendarScalarWhereWithAggregatesInput], { nullable: true })
  AND?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarScalarWhereWithAggregatesInput], { nullable: true })
  OR?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  uid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  color?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => EnumCalendarProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  provider?: EnumCalendarProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  remoteId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  syncToken?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  accountId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  primary?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  public?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  enabled?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
