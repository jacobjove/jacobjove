import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateOrConnectWithoutTemplateInput", { isAbstract: true })
export class ActionScheduleCreateOrConnectWithoutTemplateInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutTemplateInput, { nullable: false })
  create!: ActionScheduleCreateWithoutTemplateInput;
}
