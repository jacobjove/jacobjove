import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutScheduleTemplateInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateUpdateWithoutScheduleTemplateInput;
}
