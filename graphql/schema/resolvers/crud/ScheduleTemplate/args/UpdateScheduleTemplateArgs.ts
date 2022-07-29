import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateUpdateInput } from "../../../inputs/ScheduleTemplateUpdateInput";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ScheduleTemplateUpdateInput, { nullable: false })
  data!: ScheduleTemplateUpdateInput;

  @TypeGraphQL.Field(() => ScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ScheduleTemplateWhereUniqueInput;
}
