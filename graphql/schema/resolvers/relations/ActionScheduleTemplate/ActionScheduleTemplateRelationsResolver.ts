import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { ActionScheduleTemplateActionSchedulesArgs } from "./args/ActionScheduleTemplateActionSchedulesArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class ActionScheduleTemplateRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Act, { nullable: false })
  async act(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Act> {
    return getPrismaFromContext(ctx)
      .actionScheduleTemplate.findUnique({
        where: {
          id: actionScheduleTemplate.id,
        },
      })
      .act({});
  }

  @TypeGraphQL.FieldResolver((_type) => ScheduleTemplate, { nullable: false })
  async scheduleTemplate(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<ScheduleTemplate> {
    return getPrismaFromContext(ctx)
      .actionScheduleTemplate.findUnique({
        where: {
          id: actionScheduleTemplate.id,
        },
      })
      .scheduleTemplate({});
  }

  @TypeGraphQL.FieldResolver((_type) => [ActionSchedule], { nullable: false })
  async actionSchedules(
    @TypeGraphQL.Root() actionScheduleTemplate: ActionScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActionScheduleTemplateActionSchedulesArgs
  ): Promise<ActionSchedule[]> {
    throw new Error("Not implemented");
    // return ActionScheduleTemplateCrudResolver.prototype.act(ctx, info, args);
  }
}
