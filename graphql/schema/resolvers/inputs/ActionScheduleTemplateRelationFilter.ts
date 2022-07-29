import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateWhereInput } from "../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.InputType("ActionScheduleTemplateRelationFilter", {
  isAbstract: true,
})
export class ActionScheduleTemplateRelationFilter {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, { nullable: true })
  is?: ActionScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, { nullable: true })
  isNot?: ActionScheduleTemplateWhereInput | undefined;
}
