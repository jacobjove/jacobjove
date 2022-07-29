import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateManyScheduleTemplateInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateManyScheduleTemplateInput], {
    nullable: false,
  })
  data!: ActionScheduleTemplateCreateManyScheduleTemplateInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
