import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleListRelationFilter } from "../inputs/ActionScheduleListRelationFilter";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ScheduleTemplateRelationFilter } from "../inputs/ScheduleTemplateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionScheduleTemplateWhereInput", { isAbstract: true })
export class ActionScheduleTemplateWhereInput {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereInput], { nullable: true })
  AND?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereInput], { nullable: true })
  OR?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereInput], { nullable: true })
  NOT?: ActionScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateRelationFilter, { nullable: true })
  scheduleTemplate?: ScheduleTemplateRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  scheduleTemplateId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(() => ActionScheduleListRelationFilter, { nullable: true })
  actionSchedules?: ActionScheduleListRelationFilter | undefined;
}
