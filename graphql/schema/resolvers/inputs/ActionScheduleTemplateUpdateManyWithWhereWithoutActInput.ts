import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyMutationInput } from "../inputs/ActionScheduleTemplateUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithWhereWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateScalarWhereInput, { nullable: false })
  where!: ActionScheduleTemplateScalarWhereInput;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleTemplateUpdateManyMutationInput;
}
