import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleUpdateWithoutTemplateInput } from "../inputs/ActionScheduleUpdateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutTemplateInput, { nullable: false })
  update!: ActionScheduleUpdateWithoutTemplateInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutTemplateInput, { nullable: false })
  create!: ActionScheduleCreateWithoutTemplateInput;
}
