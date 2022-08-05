import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutActionSchedulesInput;
}
