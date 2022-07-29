import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateUpdateManyMutationInput } from "../../../inputs/ScheduleTemplateUpdateManyMutationInput";
import { ScheduleTemplateWhereInput } from "../../../inputs/ScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateUpdateManyMutationInput, { nullable: false })
  data!: ScheduleTemplateUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, { nullable: true })
  where?: ScheduleTemplateWhereInput | undefined;
}
