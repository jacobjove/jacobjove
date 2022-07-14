import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: ScheduleTemplateWhereUniqueInput;
}
