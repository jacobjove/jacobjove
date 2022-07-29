import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateInput } from "../../../inputs/ActionScheduleTemplateCreateInput";
import { ActionScheduleTemplateUpdateInput } from "../../../inputs/ActionScheduleTemplateUpdateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateInput, { nullable: false })
  create!: ActionScheduleTemplateCreateInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateInput, { nullable: false })
  update!: ActionScheduleTemplateUpdateInput;
}
