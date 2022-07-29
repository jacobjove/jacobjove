import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionScheduleTemplateScalarWhereInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateScalarWhereInput {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  AND?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  OR?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  NOT?: ActionScheduleTemplateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  scheduleTemplateId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;
}
