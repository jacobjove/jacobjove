import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActInput, { nullable: false })
  create!: ActionScheduleTemplateCreateWithoutActInput;
}
