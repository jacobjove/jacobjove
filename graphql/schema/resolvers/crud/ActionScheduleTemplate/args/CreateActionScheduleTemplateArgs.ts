import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateInput } from "../../../inputs/ActionScheduleTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateInput, { nullable: false })
  data!: ActionScheduleTemplateCreateInput;
}
