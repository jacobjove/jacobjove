import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyInput } from "../../../inputs/ActionScheduleTemplateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActionScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateManyInput], { nullable: false })
  data!: ActionScheduleTemplateCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
