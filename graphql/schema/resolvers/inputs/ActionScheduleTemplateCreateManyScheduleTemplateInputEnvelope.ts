import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateManyScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateManyScheduleTemplateInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateManyScheduleTemplateInput], {
    nullable: false,
  })
  data!: ActionScheduleTemplateCreateManyScheduleTemplateInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
