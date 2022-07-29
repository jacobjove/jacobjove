import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateWithoutTemplateInput } from "../inputs/ActionScheduleUpdateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutTemplateInput, { nullable: false })
  data!: ActionScheduleUpdateWithoutTemplateInput;
}
