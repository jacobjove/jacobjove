import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateWhereInput } from "../../../inputs/ScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, {
    nullable: true,
  })
  where?: ScheduleTemplateWhereInput | undefined;
}
