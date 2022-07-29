import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYWithAggregatesFilter } from "../inputs/EnumFREQUENCYWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ScheduleTemplateScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYWithAggregatesFilter, { nullable: true })
  frequency?: EnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, { nullable: true })
  multiplier?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, { nullable: true })
  chron?: StringNullableWithAggregatesFilter | undefined;
}
