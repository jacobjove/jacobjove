import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateOrConnectWithoutActInput", { isAbstract: true })
export class ActionScheduleTemplateCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActInput, { nullable: false })
  create!: ActionScheduleTemplateCreateWithoutActInput;
}
