import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { FindFirstActionScheduleTemplateArgs } from "./args/FindFirstActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class FindFirstActionScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async findFirstActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return ActionScheduleTemplateCrudResolver.prototype.findFirstActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
