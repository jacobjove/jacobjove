import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { CreateScheduleTemplateArgs } from "./args/CreateScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class CreateScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: false,
  })
  async createScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    return ScheduleTemplateCrudResolver.prototype.createScheduleTemplate(ctx, info, args);
  }
}
