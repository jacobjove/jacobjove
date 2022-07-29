import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyActInput } from "../inputs/ActionScheduleTemplateCreateManyActInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyActInputEnvelope", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateManyActInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateManyActInput], { nullable: false })
  data!: ActionScheduleTemplateCreateManyActInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
