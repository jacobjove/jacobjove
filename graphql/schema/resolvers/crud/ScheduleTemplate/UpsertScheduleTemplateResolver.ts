import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { UpsertScheduleTemplateArgs } from "./args/UpsertScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class UpsertScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: false })
  async upsertScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    return ScheduleTemplateCrudResolver.prototype.upsertScheduleTemplate(ctx, info, args);
  }
}
