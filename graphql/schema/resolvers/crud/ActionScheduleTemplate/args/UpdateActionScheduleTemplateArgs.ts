import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateInput } from "../../../inputs/ActionScheduleTemplateUpdateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActionScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateInput, { nullable: false })
  data!: ActionScheduleTemplateUpdateInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;
}
