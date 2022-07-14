import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleUpdateWithoutTemplateInput } from "../inputs/ActionScheduleUpdateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateWithoutTemplateInput, {
    nullable: false,
  })
  update!: ActionScheduleUpdateWithoutTemplateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleCreateWithoutTemplateInput;
}
