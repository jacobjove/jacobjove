import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateInput } from "../../../inputs/ActionScheduleTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateCreateInput;
}
