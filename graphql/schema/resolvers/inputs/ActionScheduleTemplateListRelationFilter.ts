import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateWhereInput } from "../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.InputType("ActionScheduleTemplateListRelationFilter", {
  isAbstract: true,
})
export class ActionScheduleTemplateListRelationFilter {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, { nullable: true })
  every?: ActionScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, { nullable: true })
  some?: ActionScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, { nullable: true })
  none?: ActionScheduleTemplateWhereInput | undefined;
}
