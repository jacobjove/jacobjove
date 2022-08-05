import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { ActionSchedule } from "@/graphql/schema/generated/models/actionSchedule.model";
import { ActionScheduleTemplate } from "@/graphql/schema/generated/models/actionScheduleTemplate.model";
import { ScheduleTemplate } from "@/graphql/schema/generated/models";
import { ActionScheduleTemplateActionSchedulesArgs } from "./args/ActionScheduleTemplateActionSchedulesArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class ActionScheduleTemplateRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Act, { nullable: false })
  async act(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Act> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => ScheduleTemplate, { nullable: false })
  async scheduleTemplate(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<ScheduleTemplate> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [ActionSchedule], { nullable: false })
  async actionSchedules(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActionScheduleTemplateActionSchedulesArgs
  ): Promise<ActionSchedule[]> {
    throw new Error("Not implemented");
  }
}
