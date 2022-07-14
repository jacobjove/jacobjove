import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { ActionScheduleTemplateGroupBy } from "../../outputs/ActionScheduleTemplateGroupBy";
import { GroupByActionScheduleTemplateArgs } from "./args/GroupByActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class GroupByActionScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => [ActionScheduleTemplateGroupBy], {
    nullable: false,
  })
  async groupByActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplateGroupBy[]> {
    return ActionScheduleTemplateCrudResolver.prototype.groupByActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
