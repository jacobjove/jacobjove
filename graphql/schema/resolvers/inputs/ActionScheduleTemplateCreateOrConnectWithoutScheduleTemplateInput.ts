import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutScheduleTemplateInput;
}
