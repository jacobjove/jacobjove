import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateUpdateWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutActInput, { nullable: false })
  update!: ActionScheduleTemplateUpdateWithoutActInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActInput, { nullable: false })
  create!: ActionScheduleTemplateCreateWithoutActInput;
}
