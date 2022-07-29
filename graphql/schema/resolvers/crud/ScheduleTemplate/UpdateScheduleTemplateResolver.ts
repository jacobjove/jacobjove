import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { UpdateScheduleTemplateArgs } from "./args/UpdateScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class UpdateScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, { nullable: true })
  async updateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return ScheduleTemplateCrudResolver.prototype.updateScheduleTemplate(ctx, info, args);
  }
}
