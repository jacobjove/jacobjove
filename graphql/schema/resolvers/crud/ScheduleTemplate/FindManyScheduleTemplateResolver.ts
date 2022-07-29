import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { FindManyScheduleTemplateArgs } from "./args/FindManyScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class FindManyScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => [ScheduleTemplate], { nullable: false })
  async scheduleTemplates(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyScheduleTemplateArgs
  ): Promise<ScheduleTemplate[]> {
    return ScheduleTemplateCrudResolver.prototype.scheduleTemplates(ctx, info, args);
  }
}
