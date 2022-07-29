import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateInput } from "../../../inputs/ScheduleTemplateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateCreateInput, { nullable: false })
  data!: ScheduleTemplateCreateInput;
}
