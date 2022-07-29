import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateUpdateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateWithoutScheduleTemplateInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutScheduleTemplateInput;
}
