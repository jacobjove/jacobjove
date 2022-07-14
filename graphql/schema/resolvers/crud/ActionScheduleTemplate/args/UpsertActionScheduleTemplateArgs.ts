import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateInput } from "../../../inputs/ActionScheduleTemplateCreateInput";
import { ActionScheduleTemplateUpdateInput } from "../../../inputs/ActionScheduleTemplateUpdateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateInput, {
    nullable: false,
  })
  create!: ActionScheduleTemplateCreateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateInput, {
    nullable: false,
  })
  update!: ActionScheduleTemplateUpdateInput;
}
