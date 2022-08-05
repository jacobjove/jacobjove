import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "@/graphql/schema/generated/models/actionScheduleTemplate.model";
import { ScheduleTemplate } from "@/graphql/schema/generated/models";
import { ScheduleTemplateActionScheduleTemplatesArgs } from "./args/ScheduleTemplateActionScheduleTemplatesArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class ScheduleTemplateRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [ActionScheduleTemplate], { nullable: false })
  async actionScheduleTemplates(
    @TypeGraphQL.Root() scheduleTemplate: ScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ScheduleTemplateActionScheduleTemplatesArgs
  ): Promise<ActionScheduleTemplate[]> {
    throw new Error("Not implemented");
  }
}
