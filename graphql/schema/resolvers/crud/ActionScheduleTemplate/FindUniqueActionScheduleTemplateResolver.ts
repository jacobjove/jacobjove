import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { FindUniqueActionScheduleTemplateArgs } from "./args/FindUniqueActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class FindUniqueActionScheduleTemplateResolver {
  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async actionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return ActionScheduleTemplateCrudResolver.prototype.actionScheduleTemplate(ctx, info, args);
  }
}
