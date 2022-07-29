import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionScheduleTemplateScalarWhereInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  AND?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  OR?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  NOT?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  scheduleTemplateId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;
}
