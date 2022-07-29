import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { FindFirstScheduleTemplateArgs } from "./args/FindFirstScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class FindFirstScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => ScheduleTemplate, { nullable: true })
  async findFirstScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return ScheduleTemplateCrudResolver.prototype.findFirstScheduleTemplate(ctx, info, args);
  }
}
