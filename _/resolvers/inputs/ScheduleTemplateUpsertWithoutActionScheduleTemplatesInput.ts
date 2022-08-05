import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  update!: ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  create!: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput;
}
