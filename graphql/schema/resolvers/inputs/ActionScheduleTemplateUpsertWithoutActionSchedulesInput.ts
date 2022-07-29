import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateUpdateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActionSchedulesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithoutActionSchedulesInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutActionSchedulesInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateWithoutActionSchedulesInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutActionSchedulesInput;
}
