import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateWhereInput } from "../../../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereInput, { nullable: true })
  where?: ActionScheduleTemplateWhereInput | undefined;
}
