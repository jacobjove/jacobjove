import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateUpdateWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutActInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateWithoutActInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateWithoutActInput;
}
