import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  update!: ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput;

  @TypeGraphQL.Field((_type) => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  create!: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput;
}
