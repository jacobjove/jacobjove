import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateInput } from "../../../inputs/ScheduleTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ScheduleTemplateCreateInput, { nullable: false })
  data!: ScheduleTemplateCreateInput;
}
