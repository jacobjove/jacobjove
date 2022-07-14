import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyMutationInput } from "../inputs/ActionScheduleTemplateUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithWhereWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateScalarWhereInput, {
    nullable: false,
  })
  where!: ActionScheduleTemplateScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActionScheduleTemplateUpdateManyMutationInput;
}
