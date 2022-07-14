import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { UpdateActionScheduleTemplateArgs } from "./args/UpdateActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class UpdateActionScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async updateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return ActionScheduleTemplateCrudResolver.prototype.updateActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
