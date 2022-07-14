import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateWhereInput } from "../../../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereInput, {
    nullable: true,
  })
  where?: ActionScheduleTemplateWhereInput | undefined;
}
