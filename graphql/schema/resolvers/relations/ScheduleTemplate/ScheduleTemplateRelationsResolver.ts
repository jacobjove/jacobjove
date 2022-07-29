// import { getPrismaFromContext } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { ScheduleTemplateActionScheduleTemplatesArgs } from "./args/ScheduleTemplateActionScheduleTemplatesArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class ScheduleTemplateRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [ActionScheduleTemplate], { nullable: false })
  async actionScheduleTemplates(
    @TypeGraphQL.Root() scheduleTemplate: ScheduleTemplate,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ScheduleTemplateActionScheduleTemplatesArgs
  ): Promise<ActionScheduleTemplate[]> {
    throw new Error("Not implemented");
  }
}
