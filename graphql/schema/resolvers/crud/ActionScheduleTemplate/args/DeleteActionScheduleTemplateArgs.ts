import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActionScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: false })
  where!: ActionScheduleTemplateWhereUniqueInput;
}
