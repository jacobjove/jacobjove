import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutActionSchedulesInput;
}
