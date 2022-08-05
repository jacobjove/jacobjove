import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyActInput } from "../inputs/ActionScheduleTemplateCreateManyActInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyActInputEnvelope", { isAbstract: true })
export class ActionScheduleTemplateCreateManyActInputEnvelope {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateManyActInput], { nullable: false })
  data!: ActionScheduleTemplateCreateManyActInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
