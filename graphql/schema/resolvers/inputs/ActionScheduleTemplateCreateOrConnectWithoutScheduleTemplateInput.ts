import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutScheduleTemplateInput;
}
