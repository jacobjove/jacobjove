import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateWhereUniqueInput;
}
