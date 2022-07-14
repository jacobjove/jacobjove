import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { FindUniqueScheduleTemplateArgs } from "./args/FindUniqueScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class FindUniqueScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async scheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return ScheduleTemplateCrudResolver.prototype.scheduleTemplate(ctx, info, args);
  }
}
