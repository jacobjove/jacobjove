import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutActInput, { nullable: false })
  data!: ActionScheduleTemplateUpdateWithoutActInput;
}
