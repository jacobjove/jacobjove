import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateListRelationFilter } from "../inputs/ActionScheduleTemplateListRelationFilter";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ScheduleTemplateWhereInput", {
  isAbstract: true,
})
export class ScheduleTemplateWhereInput {
  @TypeGraphQL.Field((_type) => [ScheduleTemplateWhereInput], { nullable: true })
  AND?: ScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateWhereInput], { nullable: true })
  OR?: ScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateWhereInput], { nullable: true })
  NOT?: ScheduleTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  chron?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateListRelationFilter, { nullable: true })
  actionScheduleTemplates?: ActionScheduleTemplateListRelationFilter | undefined;
}
