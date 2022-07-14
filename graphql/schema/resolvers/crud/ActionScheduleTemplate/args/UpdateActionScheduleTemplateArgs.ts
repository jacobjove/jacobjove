import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateInput } from "../../../inputs/ActionScheduleTemplateUpdateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateUpdateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;
}
