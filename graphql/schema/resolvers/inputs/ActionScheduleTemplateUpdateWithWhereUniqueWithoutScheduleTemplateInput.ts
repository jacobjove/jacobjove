import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateUpdateWithoutScheduleTemplateInput;
}
