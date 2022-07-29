import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateManyInput } from "../../../inputs/ScheduleTemplateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => [ScheduleTemplateCreateManyInput], { nullable: false })
  data!: ScheduleTemplateCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
