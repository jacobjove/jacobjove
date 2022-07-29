import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { CreateActionScheduleTemplateArgs } from "./args/CreateActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class CreateActionScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async createActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    return ActionScheduleTemplateCrudResolver.prototype.createActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
