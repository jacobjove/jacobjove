import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateUpdateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateWithoutScheduleTemplateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutScheduleTemplateInput;
}
