import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYWithAggregatesFilter } from "../inputs/EnumFREQUENCYWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionScheduleTemplateScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ActionScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ActionScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ActionScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  actId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  scheduleTemplateId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYWithAggregatesFilter, { nullable: true })
  frequency?: EnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, { nullable: true })
  multiplier?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, { nullable: true })
  quantity?: IntWithAggregatesFilter | undefined;
}
