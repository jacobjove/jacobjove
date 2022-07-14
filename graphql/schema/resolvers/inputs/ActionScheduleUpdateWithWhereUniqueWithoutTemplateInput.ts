import * as TypeGraphQL from "type-graphql";
import { ActionScheduleUpdateWithoutTemplateInput } from "../inputs/ActionScheduleUpdateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateWithoutTemplateInput, {
    nullable: false,
  })
  data!: ActionScheduleUpdateWithoutTemplateInput;
}
