import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateWhereInput } from "../inputs/ScheduleTemplateWhereInput";

@TypeGraphQL.InputType("ScheduleTemplateRelationFilter", {
  isAbstract: true,
})
export class ScheduleTemplateRelationFilter {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, {
    nullable: true,
  })
  is?: ScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, {
    nullable: true,
  })
  isNot?: ScheduleTemplateWhereInput | undefined;
}
