import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyTemplateInput } from "../inputs/ActionScheduleCreateManyTemplateInput";

@TypeGraphQL.InputType("ActionScheduleCreateManyTemplateInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleCreateManyTemplateInputEnvelope {
  @TypeGraphQL.Field(() => [ActionScheduleCreateManyTemplateInput], { nullable: false })
  data!: ActionScheduleCreateManyTemplateInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
