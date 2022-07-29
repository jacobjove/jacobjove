import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyMutationInput } from "../../../inputs/ActionScheduleTemplateUpdateManyMutationInput";
import { ActionScheduleTemplateWhereInput } from "../../../inputs/ActionScheduleTemplateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActionScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleTemplateUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereInput, { nullable: true })
  where?: ActionScheduleTemplateWhereInput | undefined;
}
