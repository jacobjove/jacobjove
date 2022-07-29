import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateInput } from "../../../inputs/ScheduleTemplateCreateInput";
import { ScheduleTemplateUpdateInput } from "../../../inputs/ScheduleTemplateUpdateInput";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateInput, { nullable: false })
  create!: ScheduleTemplateCreateInput;

  @TypeGraphQL.Field(() => ScheduleTemplateUpdateInput, { nullable: false })
  update!: ScheduleTemplateUpdateInput;
}
