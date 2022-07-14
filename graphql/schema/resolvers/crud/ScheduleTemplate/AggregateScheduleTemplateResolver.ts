import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { AggregateScheduleTemplate } from "../../outputs/AggregateScheduleTemplate";
import { AggregateScheduleTemplateArgs } from "./args/AggregateScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class AggregateScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => AggregateScheduleTemplate, {
    nullable: false,
  })
  async aggregateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateScheduleTemplateArgs
  ): Promise<AggregateScheduleTemplate> {
    return ScheduleTemplateCrudResolver.prototype.aggregateScheduleTemplate(ctx, info, args);
  }
}
