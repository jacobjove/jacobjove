import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateCreateInput } from "../../../inputs/ScheduleTemplateCreateInput";
import { ScheduleTemplateUpdateInput } from "../../../inputs/ScheduleTemplateUpdateInput";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ScheduleTemplateCreateInput, {
    nullable: false,
  })
  create!: ScheduleTemplateCreateInput;

  @TypeGraphQL.Field((_type) => ScheduleTemplateUpdateInput, {
    nullable: false,
  })
  update!: ScheduleTemplateUpdateInput;
}
