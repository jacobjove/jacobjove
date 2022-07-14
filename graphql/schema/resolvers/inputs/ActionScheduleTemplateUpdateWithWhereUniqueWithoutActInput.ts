import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutActInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateUpdateWithoutActInput;
}
