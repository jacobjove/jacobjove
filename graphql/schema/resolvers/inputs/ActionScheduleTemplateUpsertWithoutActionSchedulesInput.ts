import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateUpdateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActionSchedulesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithoutActionSchedulesInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutActionSchedulesInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateWithoutActionSchedulesInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutActionSchedulesInput;
}
