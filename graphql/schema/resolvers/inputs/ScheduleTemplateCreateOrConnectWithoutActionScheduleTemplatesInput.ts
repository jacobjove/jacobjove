import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateWhereUniqueInput } from "../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  create!: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput;
}
