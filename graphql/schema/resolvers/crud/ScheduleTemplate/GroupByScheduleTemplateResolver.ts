import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { ScheduleTemplateGroupBy } from "../../outputs/ScheduleTemplateGroupBy";
import { GroupByScheduleTemplateArgs } from "./args/GroupByScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class GroupByScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => [ScheduleTemplateGroupBy], {
    nullable: false,
  })
  async groupByScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByScheduleTemplateArgs
  ): Promise<ScheduleTemplateGroupBy[]> {
    return ScheduleTemplateCrudResolver.prototype.groupByScheduleTemplate(ctx, info, args);
  }
}
