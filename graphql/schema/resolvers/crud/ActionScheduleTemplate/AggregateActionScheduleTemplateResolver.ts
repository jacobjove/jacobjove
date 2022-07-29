import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { AggregateActionScheduleTemplate } from "../../outputs/AggregateActionScheduleTemplate";
import { AggregateActionScheduleTemplateArgs } from "./args/AggregateActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class AggregateActionScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => AggregateActionScheduleTemplate, { nullable: false })
  async aggregateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleTemplateArgs
  ): Promise<AggregateActionScheduleTemplate> {
    return ActionScheduleTemplateCrudResolver.prototype.aggregateActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
