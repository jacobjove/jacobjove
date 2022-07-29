import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleListRelationFilter } from "../inputs/ActionScheduleListRelationFilter";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ScheduleTemplateRelationFilter } from "../inputs/ScheduleTemplateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionScheduleTemplateWhereInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateWhereInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereInput], { nullable: true })
  AND?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereInput], { nullable: true })
  OR?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereInput], { nullable: true })
  NOT?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ScheduleTemplateRelationFilter, { nullable: true })
  scheduleTemplate?: ScheduleTemplateRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  scheduleTemplateId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleListRelationFilter, { nullable: true })
  actionSchedules?: ActionScheduleListRelationFilter | undefined;
}
